---
title: "Testing two WordPress Gutenberg prototypes – Martin Lugton"
permalink: /testing-two-wordpress-gutenberg-prototypes
date: 2017-02-18T21:15:27+00:00
redirect_from:
  - /testing-two-wordpress-gutenberg-prototypes/
---

# Testing two WordPress Gutenberg prototypes

*I carried out three user testing sessions of two prototypes of the new editor for WordPress. Users were confident in their digital skills. Here are the results.*

### Key observations

- The overall design approach is successful. The idea of thinking of content in blocks was easy to grasp, and the context-sensitive popup options were intelligible.
- The function of the up and down arrows to the left of content blocks wasn’t immediately clear.
- Users quickly worked out what the block-positioning arrows did, and were happy with this approach. To my surprise, no one tried to drag and drop blocks after finding out how to reposition blocks.
- In 1.0 people weren’t sure what the S means – is it strikethrough or the option to remove a link? Perhaps we can use proximity to make this clearer – associating this options clearly with presentation controls (underline, italics) or functionality controls (hyperlinks).
- Some users tried to drag and drop images. How will dragging and dropping work – within and between blocks?

### Full notes of the testing sessions

#### First prototype

##### Tester 1

[Prototype: “A beautiful thing about Apple…”](https://wordpress.github.io/gutenberg/tinymce-per-block/)

![prototype of a new editor for wordpress](Testing%20two%20WordPress%20Gutenberg%20prototypes%20%E2%80%93%20Martin%20Lugton_files/Screenshot-2017-02-18-21.10.23.png)

Clicks into a block and sees and instantly understands the alignment options.

Clicks on the ¶ symbol but it doesn’t do anything.
Expected it to be interactive as the mouse changed to a hand pointer, suggesting interactivity.

Clicks on the up arrow, but nothing happens. Wasn’t really sure what it would do.

Enters a line return to break up the paragraph of text, but isn’t able to do this.
Thought that the arrows up and down might allow the insertion of a line break.

Highlights text to make it bold and expects to have to use a keyboard shortcut as nothing was previously visible on the screen. But then notices the popup.
Comfortable with the options presented.

Heading and blockquote options don’t behave as expected. (Dismissed as a limitation of the prototype)

Clicks on the image. The up and down buttons don’t do anything.
Tries to click on the image icon but it doesn’t do anything.
“I don’t understand what the symbols are. I expected them to be interactive but they don’t do anything.”

##### Tester 2

Understands the split between code and visual editors.

Likes the context-specific editing as it keeps the screen more focused.

##### Tester 3

Understands the concept of HTML and editable preview.

Wonders how valuable constant HTML visibility is to the average content editor. Will they break things?

#### Second prototype

[“1.0 Is The Loneliest Number”](https://wordpress.github.io/gutenberg/)

![An early prototype of the new wordpress gutenberg editor](Testing%20two%20WordPress%20Gutenberg%20prototypes%20%E2%80%93%20Martin%20Lugton_files/Screenshot-2017-02-18-21.13.41.png)

##### Tester 1

Clicks on the heading text block.
Then clicks on the up arrow.
Then clicks down on it. “Ah, that’s interesting. So these up arrows change the order of the boxes”

User expected to be able to insert line breaks. (How do we want to handle line breaks within paragraph blocks? Do we permit them, meaning that we have big text blocks, or do we take line breaks as denoting the start of a new paragraph block? I’d prefer the latter but haven’t thought about all use cases.)

Clicks on the paragraph of text, and then clicks on the ¶ symbol.
Changes to blockquote style from paragraph style.
Understands that this allows him to apply style to the block.

Scrolls down the page and clicks on the plus sign at the bottom.

When asked what this is, says that it’s “a shortcut to functions that you use regularly.”
When asked: what would you expect to happen if you clicked on one of these items?
“It would create a new paragraph, image, heading, quote, etc, which you’d then populate with content.”

##### Tester 2

Clicks into the block and manipulates alignment options – working as expected.

Clicks down arrow and block responds as expected. Understands that the page is made up of blocks and that these can be repositioned.

Clicks on “+” and explains that this will add a new block. More options than expected: expected just image or text, so the extra options are “a nice surprise”.

Drags and drops an image into the content block. (Is this something we want to design for?)

Clicks on ¶  – and changes the text block type

##### Tester 3

Clicks into the text block.
“I wonder what the arrow does” Clicks on the down arrow and sees the block move down. Understands it fine.

Looks at alignment options. “Does that do the whole block? It does”

In general, understands the popup text formatting and link options.
Not sure what the popup “S” with strikethrough icon means.

Clicks on image and manipulates text flow options.

Clicks image icon, but “nothing here”. Expects caption controls.

Clicks on the “+” sign, and understands that this is for adding blocks. Wonders how lists will interact with paragraph blocks, and how we could set levels of header.

Easily understood the blocks concept. Wondered how well this would handle more complex page layouts.