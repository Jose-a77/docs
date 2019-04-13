/**
 * Copyright 2018 Google Inc. All Rights Reserved.
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

const ampOptimizer = require('amp-toolbox-optimizer');
const runtimeVersion = require('amp-toolbox-runtime-version');
const path = require('path');

const io = require('./lib/io');
const templates = require('./lib/templates');

const DIST_DIR = 'dist';
const AMP_PATH = 'amp';
const INPUT_FILE = 'templates/index.html';

const generatorTemplate = io.readFile(INPUT_FILE);
const config = initConfig();
const generatorPage = templates.render(generatorTemplate, config);
generateOptimizedAmpFiles(generatorPage);
console.log('Built boilerplate generator.');

function initConfig() {
  const config = {
    gaTrackingId: require('../platform/config/shared.json').gaTrackingId,
    categories: require('./data/categories.json'),
    formats: require('./data/formats.json'),
    templates: templates.find('./templates/files'),
    highlightTheme:
      io.readFile(path.join(__dirname, '../node_modules/highlight.js/styles/monokai.css')),
  };
  // assign default template
  let defaultTemplate;
  config.formats.forEach((format) => {
    format.template = config.templates[format.id];
    if (format.default) {
      defaultTemplate = format.template;
    }
  });
  // server-side render initial boilerplate code
  config.initialCode = templates.render(defaultTemplate, {});
  return config;
}

async function generateOptimizedAmpFiles(output) {
  const optimized = await optimizeAmp(output);
  io.writeFile(DIST_DIR, 'index.html', optimized);
  io.writeFile(DIST_DIR, AMP_PATH, 'index.html', output);
}

async function optimizeAmp(html) {
  const ampRuntimeVersion = await runtimeVersion.currentVersion();
  return await ampOptimizer.transformHtml(html, {
    ampUrl: './' + AMP_PATH,
    ampRuntimeVersion,
  });
}
