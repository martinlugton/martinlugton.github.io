---
title: "How to design usable multi-page articles"
permalink: /how-to-design-usable-multi-page-articles
date: 2014-03-05T16:23:56+00:00
redirect_from:
  - /how-to-design-usable-multi-page-articles/
---

In-depth digital articles can be hard to navigate. Dividing them into different sections can make things easier.

For example, at Mind, we split our information on [depression](http://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/) into subsections, so that if you want to quickly navigate to “Symptoms”, “Causes”, “Self-help, treatment and support”, “How can friends and family help” (etc) you can do so. It also helps people understand the content that the article will cover much more easily than requiring them to navigate through a single long page of text.

But there are some drawbacks of splitting your information into different sections – sometimes people don’t know that they’re reading one part of a larger topic. So the way that you show that there are other sections, and allow people to navigate through them, is important.

Reviews on technology sites are similarly complex, and these sites face the same navigational challenge. How do different technology sites approach multi-section articles, and which approach is best? I’ve assembled a few screenshots here (with added highlighting and some analysis). I’ve also tried to summarise best practice as I see it. I’d be interested to see some user testing on all this, to see if my review is on the right track. This material is all for desktop – there’s another discussion to be had for mobile.

### Best practice

- Prominently number sub-sections.
- Include sectional navigation at the top and bottom of each page.
- Include numbers in your section headings if your content is sequential.
- Use the overall article heading and the heading of the sub-page to describe structure. You need to be attentive both to positioning and hierarchy, and to labelling your content clearly.
- Include “next” and “previous” section navigation. Be aware that it needs context to make sense. This can be provided either by the button itself, or by proximity to a summary of the sections of the article.
- List all the sections of the article – don’t hide them in a dropdown – and show the user where they are currently in relation to other sections.
- Make your inter-section navigation tactile and make sure that it is consistent and not obscured.

### Tom’s Hardware

View an [example article](http://www.tomshardware.co.uk/gaming-cpu-review-overclock,review-32885.html). Click on the screenshot below to see a full-size version.

![a screenshot showing a multi-section article on tom's hardware, with navigation elements highlighted](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/toms-hardware-multi-section-articles-with-navigation-highlig.png)

I think Tom’s hardware is very effective at helping people understand and navigate its multi-section articles:

- There’s navigation at the top and the bottom of each section.
- Sections are numbered – which, particularly when looking at the top section – helps convey the fact that this article is made up of multiple sections.
- The proximity of the navigation elements at the top of the page is useful. The section number, the dropdown, and the next and previous buttons (one of which is greyed out in this case, which suggests that it relates to the number in front of the heading) are all displayed close to the heading.
- The interactive elements are nice and chunky, and are highlighted using a dominant colour. This suggests that they are interactive.
- The bottom navigation section gives more space to the next and previous buttons.
- In the bottom section, under the heading “Summary”, the different sections are numbered and their names are written out. The current section is highlighted in bold, with a chevron next to it.
- The adverts at the bottom of the page clearly come after the body of the article, and so don’t add confusion.

There are a couple of small points for improvement:

- The URL could do a better job of making it clear that you’re in the first section of a multi-section article. http://www.tomshardware.co.uk/gaming-cpu-review-overclock,review-32885.html looks like the URL of a one-off page sitting directly under the home page. It’s only when you get to the second section of the article – http://www.tomshardware.co.uk/gaming-cpu-review-overclock,review-32885-2.html – that you can infer any structure.
- The next and previous buttons themselves don’t make it clear what they relate to. In isolation they could be confusing: “Next” what? Next article in chronological order? Next page in this category? But in context these buttons work well, as the summary section makes them much clearer.

### Tech Power Up

View an [example article](http://www.techpowerup.com/reviews/ASUS/R9_280X_Direct_Cu_II_TOP/1.html).

![a screenshot showing a multi-section article on Tech Power Up](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/Tech-Power-Up-multi-section-articles-with-navigation-highlig.png)

I think this design is less effective:

- There’s less consistency between interactive elements, which it makes their purpose less clear. (Compare the “Packaging & Contents” buttons at top and bottom) So while these buttons feature at top and bottom of the page, they don’t have as much impact as they could do.
- Of the two buttons, the one at the bottom is much better. It explains itself as a section navigation by saying “next”, and also explains what section you’ll be taken to. The top button doesn’t make it clear that it relates to another subsection of the current article. It’s also hidden among the social links.
- A dropdown is used to allow navigation between sections. This takes up less space than the summary solution used by Tom’s Hardware, which shows all the heading names, but might confuse some users if they don’t know that they’re currently in the listed section of a multi-section article.
- The use of numbers helps to show that this section sits in a sequence. But the numbers are shown at the bottom and not the top of the page. Tom’s Hardware, on the other hand, brings these section numbers to the fore at the top of the article.
- There’s no back button, unlike Tom’s Hardware. Rather, the dropdown navigation sits in-line with the next button. Again, this saves space but may introduce more confusion.

### Overclock 3d.net

View an [example article](http://www.overclock3d.net/reviews/cases_cooling/nanoxia_deep_silence_ds4/1).

![multi section navigation highlighted, from overclock3d.net](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/overclock3d-multi-section-articles-with-navigatio-highlighte.png)

- The page title, and the next and previous section buttons aren’t very clear. The “previous” button on the first page is ‘greyed-out’ (lightened in colour to show that it’s not functional in this context), but the difference in colour is so slight as to be potentially missed.
- At the bottom of the page, sections are numbered, and previous and next navigation is used as well (it’s ‘greyed-out’ when not relevant) on the left hand side, and a dropdown showing section contents is displayed on the right hand side.

### Hexus

View an [example article](http://hexus.net/tech/reviews/graphics/61013-asus-radeon-r9-280x-directcu-ii-top/).

![hexus multi section articles with navigation highlighted](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/hexus-multi-section-articles-with-navigation-highlighted.png)

- Advertising distracts attention from the top navigation. Confusingly, it’s in the same colour as the bottom navigation.
- The hierarchy of overall article heading, and the heading of the individual pages, is nice and clear. The same is the case with Tweak Town, below.

### Tweak Town

View an [example article](http://www.tweaktown.com/reviews/5905/asus-radeon-r9-280x-directcu-ii-top-3gb-overclocked-video-card-review/index.html).

![screenshot of a multi-section article on Tweak Town, with navigation highlighted](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/Tweak-Town-multi-section-articles-with-navigation-highlighte.png)

- The use of colour around the top navigation is quite distracting, which is a shame, as otherwise this design is good.

### Hard OCP

View an [example article](http://www.hardocp.com/article/2013/12/29/asus_rog_matrix_platinum_r9_280x_video_card_review/1#.UxDKMvk0Ol4).

![screenshot of a hard ocp multi-section article highlighting the navigation](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/hard-ocp-multi-section-articles-with-navigation-highlighted.png)

- The navigation might need to be more prominent to be visible to new visitors.

### Anand Tech

View an [example article](http://www.anandtech.com/show/7400/the-radeon-r9-280x-review-feat-asus-xfx).

![screnshoot of a multi-section article on anandtech, with the navigation highlighted](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/anandtech-multi-section-articles-with-navigation-highlighted.png)

- The top doesn’t feature any navigation options.
- The top doesn’t make it clear that you’re in a section of a larger article through use of headings.
- The bottom next navigation says the name of the section, but it doesn’t make it clear that it is the next section in a sequence of sections. It could potentially be anything. The title of the second section in this case is confusing – “Mantle: a low-level graphics API for CGN”. This could quite easily be referring to a completely separate article on Mantle.
- The bottom navigation doesn’t have arrows or next buttons. This can be confusing if you arrive part way through an article from organic search.
- The bottom dropdown shows section titles, but no section numbers, even though these are in URLs after the first page.

### Vortez

View an [example article](http://www.vortez.net/articles_pages/asus_gtx_770_directcu_ii_oc_review,1.html).

![screenshot of a vortez multi-section article, highlighting the navigation](How%20to%20design%20usable%20multi-page%20articles%20%E2%80%93%20Martin%20Lugton_files/vortez-multi-section-articles-with-navigation-highlighted.png)

- There’s a breadcrumb at the bottom of the page, which makes it clear that you’re in page one of a larger article, even if there isn’t an easily scannable summary of the other sections and their contents.