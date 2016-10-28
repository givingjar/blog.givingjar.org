---
layout: post
title: The Landing Page is Live!
subtitle: "Progress Report #1"
permalink: /progress-report-1-landing-page-is-live/
tags: [progress-report]
image:
  path: /img/cards/coming-soon.jpg
description: >
    The Giving Jar landing page is live, and that's only one of the six features that were rolled out. Read the first
    progress report to learn about those features, the road bumps encountered, who helped, and what's coming next.
---

Progress reports are Giving Jar's way of celebrating [success][30], reflecting on [failure][7] (and what was learned from it), giving [thanks][15], and taking a peek at what's [up and coming][31]. Hopefully you will find these progress reports informative. If you have feedback to offer, send it along!

Since this is the first progress report, it's not so much an update as it is a baseline from which all other progress reports can be measured. The next one will be much shorter!

## Success {#success}

Here are the major wins in this progress report:

1. The landing page was launched.
2. The Giving Jar blog is available for consumption.
3. A weekly newsletter is in production.
4. Curated news with positive messages are shared daily.
5. The filing cabinet is open for all to peruse.
6. All browser-visible content has been open sourced.

If you don't want to know about the details of these wins, feel free to skip to *[Failure][7]*.

#### Landing Page

The biggest news of the first progress report is that the [landing page][2] is live! Go there to learn all about Giving Jar and sign up for the newsletter.

If you want to learn more about what went into the landing page (logo design, wordsmithing, mobile-friendly layout, analytics, etc.), read *[What's in a Landing Page?][5]* on the [Technical Rex blog][6].

#### Giving Jar Blog

Writing is the earliest way that Giving Jar can help people discover charities and learn about the Giving Jar platform. The charity spotlights and progress reports are two such examples.

All written content will be published to the [Giving Jar blog][8]. If the content is more technical in nature, you'll find the details on the [Technical Rex blog][6]. Until Giving Jar gets its own development blog, those technical articles will just be linked to from here.

If you prefer to get your news in one place, there are Atom feeds for both blogs.

#### Weekly Newsletter

At the time of this writing, there is a sign up form on the Giving Jar landing page. Subscribe if you want to discover more about nonprofits, charitable giving, and Giving Jar.

The newsletter will be sent weekly and will contain one of the following:

1. **Charity Spotlights.** These charity interviews will help nonprofits get the word out about their mission and explore valuable information about how they operate, the challenges they face, and how donors can help.
2. **Progress Reports.** This is what you're reading now. These reports are how Giving Jar keep interested readers up to date.

#### Curated News

This idea was a last-minute addition to the rollout of the landing page. If you follow Giving Jar on social media then you will see daily items from the news about charities and donations.

These shared links exist to inform and inspire. Each one is hand-picked because of the positive message or information it provides about the nonprofit space. They are not ads and Giving Jar does not make money from them whatsoever.

#### Open Filing Cabinet

In the name of transparency and potentially helping other startups out, all files that don't have sensitive[^1] information will be made publicly available in the [Giving Jar Filing Cabinet][9].

Right now there are two files available:

* *[Giving Jar Blogging Guide][10]*
* *[Giving Jar Social Media Guide][11]*

#### Open Source Content

Along the same vein as the open filing cabinet, all web content for Giving Jar is being open sourced. The following repositories are available for perusal:

1. [Giving Jar Landing Page Front-end][12]
2. [Giving Jar Blog (made with Jekyll)][13]
3. [Giving Jar Media Assets][14]

Feel free to fork and use these resources, but please abide by the license assigned to each repository. If there is no license file, then the content of the repository should not be used without explicit permission from Giving Jar.

## Failure {#failure}

There are almost always setbacks when working on a project of any size. Here are the lessons learned from the last round of setbacks:

1. Tasks should be small and specific.
2. Expect technical difficulties.

Here are the stories behind those takeaways. If you don't want the details, jump ahead to the *[Thanks][15]*.

#### Tasks Should Be Small and Specific.

The first handful of tasks for Giving Jar were very high-level:

* Create landing page.
* Create blog.
* Create newsletter.
* ...

The reason these tasks should have been smaller is a matter of prioritization. Here's a real example: hours of time went into picking a color scheme for the site. After the photos were taken, though, it was obvious what the color scheme should be.

#### Expect Technical Difficulties.

Technical difficulties will happen. When they do, it's important to be able to quickly adapt your plan accordingly.

Setting up email for `givingjar.org` went poorly because server issues were causing 2-5 hour delays in email delivery. If you are working on a remote system and run into issues, bring up their status page. It might save you hours if you quickly discover the issue is on their side.

***Bonus Takeaway:*** *If you offer a service to others, be very forthcoming on your website and social media when issues crop up!*

Acquiring an SSL certificate was also quite the rollercoaster ride. The gist of the lesson learned here is to hold off on purchasing software until you need it. Giving Jar doesn't need an SSL certificate right now, but when it does, [Let's Encrypt][16] will be the first stop.

## Thanks {#thanks}

The landing page wouldn't look nearly as good if it weren't for photographic prowess of [Ian Kast][17]. Same goes for [Dean Attali][18], creator of the [Beautiful Jekyll][19] theme that the Giving Jar blog is based on.

There will never be enough thanks to everyone building amazing free tools. [Inkscape][20], [GIMP][21], [Atom][22], [Slack][23], [Git][24], [GitHub][25], [Zoho][26], [Surge][27], that's you!

A tip of the hat to everyone who helped by giving feedback during the development process as well (Chris, Sam, Rich, Kevin, and everyone in the [Lansing Codes][28] Slack team). Never underestimate the value of someone who is willing to critique your work.

Finally, thanks to everyone following Giving Jar:

* 12 mailing list members
* 7 Twitter followers
* 19 Facebook page likes

## Upcoming {#upcoming}

The first charity spotlight will be published next week! Giving Jar is on the lookout for charities to interview, too. If you know a charity that might be interested, [send an email][1], [tweet][3], or write on [Facebook][4].

A meeting needs to be scheduled with an accountant. There are lots of financial considerations to be made for a startup as it rolls into the new year.

It doesn't sound like much, but with Christmas falling at the end of the next week, it'll be enough!

## Footnotes

[^1]: "Sensitive" information is anything that could be used in malicious ways against Giving Jar or its employees (social security numbers, usernames/passwords, etc.).



[1]: mailto:hello@givingjar.org "Email Giving Jar"
[2]: http://givingjar.org "Giving Jar Landing Page"
[3]: https://twitter.com/givingjar "Giving Jar on Twitter"
[4]: https://www.facebook.com/givingjarorg "Giving Jar on Facebook"
[5]: http://technicalrex.com/whats-in-a-landing-page/ "What's in a Landing Page? on the Technical Rex Blog"
[6]: http://technicalrex.com "Technical Rex Blog"
[7]: #failure "Failure Section"
[8]: http://blog.givingjar.org "Giving Jar Blog"
[9]: https://github.com/givingjar/filing-cabinet "Giving Jar Filing Cabinet"
[10]: https://github.com/givingjar/filing-cabinet/blob/master/files/guides/blogging-guide.md "Giving Jar Blogging Guide"
[11]: https://github.com/givingjar/filing-cabinet/blob/master/files/guides/social-media-guide.md "Giving Jar Social Media Guide"
[12]: https://github.com/givingjar/givingjar.org "Giving Jar Landing Page Code"
[13]: https://github.com/givingjar/blog.givingjar.org "Giving Jar Blog Code"
[14]: https://github.com/givingjar/media "Giving Jar Media Assets"
[15]: #thanks "Thanks Section"
[16]: https://letsencrypt.org "Let's Encrypt SSL Certificates"
[17]: https://twitter.com/MrIanKast "Ian Kast on Twitter"
[18]: http://deanattali.com/ "Dean Attali Homepage"
[19]: http://deanattali.com/beautiful-jekyll/ "Beautiful Jekyll Homepage"
[20]: https://inkscape.org/ "Inkscape Homepage"
[21]: http://www.gimp.org/ "GIMP Homepage"
[22]: https://atom.io/ "Atom Homepage"
[23]: https://slack.com/ "Slack Homepage"
[24]: http://www.git-scm.com/ "Git Homepage"
[25]: https://github.com/ "GitHub Homepage"
[26]: https://www.zoho.com/ "Zoho Homepage"
[27]: https://surge.sh/ "Surge Homepage"
[28]: http://www.lansing.codes/ "Lansing Codes Homepage"
[29]: http://www.democamplansing.com/ "DemoCamp Lansing Homepage"
[30]: #success "Success Section"
[31]: #upcoming "Upcoming Section"
