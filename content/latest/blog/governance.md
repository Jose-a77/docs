---
class: post-blog post-detail
type: Blog
$title: "An open governance model for the AMP Project"
id: governance
author: Malte Ubl
role:  Tech Lead for the AMP Project at Google
origin: "https://amphtml.wordpress.com/2018/09/18/governance/amp/"
excerpt: "Over the last 2 years AMP has grown from a tiny open source project with just 2 contributors to a much larger one with over 700 folks contributing over 10,000 commits running on many millions of websites. When choosing a governance model (a system that describes how decisions are made) for AMP,  we initially focused [&#8230;]"
avatar: https://amphtml.files.wordpress.com/2018/09/amp-contributions.png
date_data: 2018-09-18T08:56:46-07:00
$date: September 18, 2018
$parent: /content/latest/list-blog.html
$path: /latest/blog/{base}/
$localization:
  path: /{locale}/latest/blog/{base}/
components:
  - social-share
inlineCSS: .amp-wp-inline-329fdb7771c10d07df9eb73273c95a60{font-weight:400;}.amp-wp-inline-e47090e158fb7bc81ae36ab1785abb36{max-width:1200px;}
---

<div class="amp-wp-article-content">

		<p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Over the last 2 years AMP has grown from a tiny open source project with just 2 contributors to a much larger one with over 700 folks contributing over 10,000 commits running on many millions of websites. When choosing a governance model (a system that describes how decisions are made) for AMP,  we initially focused on agility. AMP has always been powered by the voices and feedback of the developers and organizations that use it; however, governance was centered around the tech lead (which is </span><a href="https://twitter.com/cramforce"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">me</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">, the author of this post </span><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">🤣</span><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">), who ultimately decided what got executed and how. </span></p><p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">While this works great for smaller projects, we’ve found that it doesn’t scale to the size of the AMP Project today. Instead we want to move to a model that explicitly gives a voice to all constituents of the community, including those who cannot contribute code themselves, such as end-users. The change we are proposing is based on months of research, through which we’ve decided to follow the </span><a href="https://nodejs.org/en/about/governance/"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">lead of the Node.js project</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"> and move to a consensus-seeking governance model.</span></p><figure data-shortcode="caption" id="attachment_2148" class="wp-caption alignnone amp-wp-inline-e47090e158fb7bc81ae36ab1785abb36"><amp-img class="alignnone size-full wp-image-2148 amp-wp-enforced-sizes" src="https://amphtml.files.wordpress.com/2018/09/amp-contributions.png?w=660" alt="amp-contributions" srcset="https://amphtml.files.wordpress.com/2018/09/amp-contributions.png?w=660 660w, https://amphtml.files.wordpress.com/2018/09/amp-contributions.png?w=129 129w, https://amphtml.files.wordpress.com/2018/09/amp-contributions.png?w=257 257w, https://amphtml.files.wordpress.com/2018/09/amp-contributions.png?w=768 768w, https://amphtml.files.wordpress.com/2018/09/amp-contributions.png?w=878 878w, https://amphtml.files.wordpress.com/2018/09/amp-contributions.png 1200w" sizes="(min-width: 660px) 660px, 100vw" width="660" height="770"></amp-img><figcaption class="wp-caption-text">AMP received contributions from 710 contributors overall, 22% from Google employees, 78% from other companies such as Twitter, Pinterest, Yahoo, and eBay. In the last 30 days alone over 350 contributions landed in AMP!</figcaption></figure><p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">When creating this </span><a href="http://github.com/ampproject/meta/pull/1">proposal for a new governance model for AMP</a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"> the AMP team had a few goals in mind, including:</span></p><ul><li class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Encourage a wider variety of voices at all levels of contribution, including code contributions, setting the future direction of AMP and deciding which features and bug fixes should be worked on.  This also means ensuring that the voices of those who do not contribute with code, but are nonetheless impacted by AMP, get heard. </span></li>
<li class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Make it more clear how an individual and a company can have a voice in AMP, from approving code changes to setting AMP’s technical and product roadmap.</span></li>
<li class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Avoid slowing down day-to-day work on AMP due to the governance model.  The net effect of changes to the way people work on AMP should be neutral to positive in terms of productivity.</span></li>
<li class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Learn from what’s worked and what hasn’t worked for other open source projects.  To this end the AMP team talked to people from projects such as </span><a href="https://nodejs.org/en/"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Node.js</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"> and </span><a href="https://kubernetes.io/"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Kubernetes</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">, looked at governance philosophies from places like the </span><a href="https://js.foundation/"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">JS Foundation</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"> and reviewed a wide variety of other open source and web standards governance documents.</span></li>
</ul><p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">The proposal has full details but some of the significant changes proposed in the new model are:</span></p><ul><li class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">The power to make significant decisions in the AMP Project will move from a single Tech Lead to a Technical Steering Committee (TSC) which includes representatives from companies that have committed resources to building AMP, with the end goal of not having any company sit on more than a third of the seats.</span></li>
<li class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">An Advisory Committee with representation from many of AMP’s constituencies will advise the TSC.</span></li>
<li class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Working Groups with ownership over certain aspects of AMP (such as the UI, infrastructure and documentation) will replace the informal teams that exist today.  These Working Groups will have a clear mechanism for input and a well-defined decision making process.</span></li>
</ul><p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">One of our first tasks in working towards the new system is to complete the initial membership of AMP’s governance groups. If you are interested in being involved in any of these governance groups </span><a href="https://goo.gl/forms/WCUDNX23CY9LL5xC2"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">please let us know</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">. This is real work, and we want to pay for it if it isn’t covered by your day job! If you need financial support, please let us know in the form. One area that we are particularly interested in is representation from folks with experience in consumer rights and protection. Meanwhile we’re excited to announce that we’ve talked to a few folks up front and they agreed to join the Advisory Committee including representatives from publishers (El País, Washington Post and Terra), e-commerce sites (AliExpress and eBay) and platforms (Cloudflare and Automattic) as well as advocates for an open web (</span><a href="https://twitter.com/leoniewatson"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Léonie Watson</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"> of The Paciello Group, </span><a href="https://twitter.com/stubbornella"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Nicole Sullivan</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"> of Google/Chrome, and </span><a href="https://twitter.com/edent"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Terence Eden</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">).</span></p><p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Additionally, we’re exploring moving AMP to a foundation in the future, and we’ll seek the input of the TSC, the AC, and the community over the coming months. We see the governance changes as a first step in that direction.</span></p><p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">We’re looking forward to working with the rest of the AMP community to refine the governance proposal, including at next week’s </span><a href="https://events.withgoogle.com/amp-contributor-summit/"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">AMP Contributor Summit</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">.  We encourage you to review and comment on the proposal and attend the </span><a href="https://github.com/ampproject/amphtml/issues/17924"><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">design review</span></a><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60"> that has been scheduled to discuss the proposal.  The review period for the proposal will end on October 25, 2018 with a goal of implementing the new governance model shortly thereafter.</span></p><p><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">We’re excited to see the AMP community take this next step, and hope you will join us in making the web a better place for users and developers alike.</span></p><p><i><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Posted by </span></i><a href="https://twitter.com/cramforce"><i><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">Malte Ubl</span></i></a><i><span class="amp-wp-inline-329fdb7771c10d07df9eb73273c95a60">, Tech Lead for the AMP Project at Google</span></i></p>	</div>

	

</div>
