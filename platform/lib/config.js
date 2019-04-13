/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const signale = require('signale');
const fs = require('fs');
const mri = require('mri');
const yaml = require('js-yaml');
const utils = require('@lib/utils');

const GROW_CONFIG_TEMPLATE_PATH = utils.project.absolute('platform/config/podspec.yaml');
const GROW_CONFIG_DEST = utils.project.absolute('pages/podspec.yaml');
const GROW_OUT_DIR = utils.project.absolute('platform/pages');

const ENV_DEV = 'development';
const ENV_PROD = 'production';
const AVAILABLE_LOCALES = [
  'en',
  'fr',
  'ar',
  'es',
  'it',
  'id',
  'ja',
  'ko',
  'pt_BR',
  'ru',
  'tr',
  'zh_CN',
]

class Config {
  constructor(environment = ENV_DEV) {
    const env = require(utils.project.absolute(`platform/config/environments/${environment}.json`));

    this.environment = env.name;
    this.hosts = env.hosts;
    this.hostNames = new Set();
    Object.values(this.hosts).forEach((host) => {
      host.base = this.getHost(host);
      let hostName = host.host;
      if (host.subdomain) {
        hostName = host.subdomain + '.' + hostName;
      }
      this.hostNames.add(hostName);
    });

    this.shared = require(utils.project.absolute('platform/config/shared.json'));

    // Globally initialize command line arguments for use across all modules
    this.options = mri(process.argv.slice(2));

    // Synchronously write podspec for Grow to run flawlessly later in pipeline.
    try {
      this._configureGrow();
    } catch (err) {
      // writes are not permitted on GAE or in a container
    }
  }

  /**
   * Returns true if development mode is active.
   */
  isDevMode() {
    return this.environment === ENV_DEV;
  }

  /**
   * Returns true if production mode is active.
   */
  isProdMode() {
    return this.environment === ENV_PROD;
  }

  /**
   * Builds a subdomain URL from a host object containing scheme, host, subdomain and port
   * @return {String} The full URL
   */
  getHost(hostConfig) {
    let url = `${hostConfig.scheme}://`;
    const isLocalhost = (hostConfig.host === 'localhost');
    if (isLocalhost || !hostConfig.subdomain) {
      url += hostConfig.host;
    } else {
      url += `${hostConfig.subdomain}.${hostConfig.host}`;
    }
    if (hostConfig.port) {
      url += `:${hostConfig.port}`;
    }
    return url;
  }

  /**
   * Builds a podspec for the current environment and writes it to the Grow pod
   * @return {undefined}
   */
  _configureGrow() {
    let podspec = fs.readFileSync(GROW_CONFIG_TEMPLATE_PATH, 'utf-8');
    podspec = yaml.safeLoad(podspec);

    // Check if specific languages have been configured, if not force-enable
    // all available langauges at least during development
    if(this.options.locales) {
      const locales = this.options.locales.split(',');
      if (!locales.every(locale => AVAILABLE_LOCALES.includes(locale))) {
        signale.fatal('Invalid set of locales given:', this.options.locales);
        signale.info('Available locales are', AVAILABLE_LOCALES.join(', '));
        process.exit(1);
      }

      podspec.localization.locales = locales;
      signale.info('Building locales', this.options.locales);
    } else if (this.isDevMode()) {
      podspec.localization.locales = AVAILABLE_LOCALES;
    }

    // Add environment specific information to configuration needed for URLs
    podspec['env'] = {
      'name': this.environment,
      'host': this.hosts.pages.host,
      'scheme': this.hosts.pages.scheme,
    };

    // Only add port if there really is one, otherwise Grow fails on an empty field
    if (this.hosts.pages.port) {
      podspec.env.port = this.hosts.pages.port;
    }

    // Add Google Analytics Tracking ID for use in templates
    podspec['gaTrackingId'] = this.shared.gaTrackingId;

    podspec['base_urls'] = {
      'repository': this.shared.baseUrls.repository,
      'playground': this.hosts.playground.base,
      'platform': this.hosts.platform.base,
      'api': this.hosts.api.base,
      'preview': this.hosts.preview.base,
    };

    // Deployment specific
    podspec['deployments'] = {
      'default': {
        'name': 'default',
        'destination': 'local',
        'out_dir': GROW_OUT_DIR,
        'env': podspec['env'],
      },
    };

    fs.writeFileSync(GROW_CONFIG_DEST, yaml.dump(podspec, {'noRefs': true}));
    signale.success('Configured Grow!');
  }
}

const config = new Config(process.env.APP_ENV || process.env.NODE_ENV);

module.exports = config;
