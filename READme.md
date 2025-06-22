# Project CSS Styling

This repository contains the CSS styling for a web project, outlining the design choices for colors, responsiveness, and unique creative elements.

## Public link

[TRAVEL KENYA](https://finale-project-two.vercel.app/?authuser=0)

## Color System

This design utilizes a focused color palette chosen to convey trust, professionalism, and an approachable feel, suitable for a modern Travel Kenya website.

## Primary Base:

+ #2c3e50 (Dark Blue/Charcoal): Employed for the header and as a primary text color. This color grounds the design, symbolizing stability and corporate reliability.
+ whitesmoke (Off-White): Used as the main background. It offers a clean, airy canvas that ensures readability and a contemporary aesthetic.
+ black: Utilized for core text elements, providing high contrast against lighter backgrounds for optimal legibility.

## Accent & Interactive Elements:

+ yellowgreen: A vibrant, optimistic shade used for button hovers, specific section backgrounds (like pricing cards in Section 7, and FAQ items). This color signals interactivity and draws attention to key features.
+ sandybrown & brown: Earthy tones that provide variety for button backgrounds, offering a slightly different visual weight for calls to action.
+ rgb(59, 59, 214) (Blue) & lightblue: Used for hover and active states of buttons, providing clear visual feedback on interaction.
+ yellow: A high-visibility color for active button states and other prominent calls to action, conveying immediacy and success.
+orange: Featured in the pulsating border animation in Section 7. Its warmth adds a dynamic, eye-catching element to important cards.
+ grey: Provides a neutral background for testimonial cards, allowing the content to take center stage.
+ #6D712E (Muted Green/Brown): Another earthy tone for specific buttons, adding depth to the interactive palette.
+ chartreuse: A bright, energetic green specifically for the FAQ sections, making them visually distinct and engaging.
+ green: Used for message input fields, offering a standard and recognizable visual for user input areas.
+ The blend of dark, professional bases with lively, contrasting accents aims to create a balanced and inviting user interface.

### Breakpoint Logic

* The design employs a single, crucial media query to ensure optimal viewing across various devices, primarily focusing on mobile responsiveness.

### @media screen and (max-width: 450px):
### Purpose:
* This breakpoint specifically targets smaller screens, typical of mobile phones. It ensures the layout gracefully adapts to narrow viewports, prioritizing vertical flow and ease of interaction on handheld devices.
### Transformations Applied:
* General Scaling: Font sizes, padding, and margins are reduced across the board for a compact fit.
* Header: The fixed min-width is removed, and the navigation (nav ul) switches from a horizontal row to a vertical column, hidden by default (display: none). This prepares the design for a mobile hamburger menu (indicated by the .menu icon becoming visible, display: flex).
* Layout Stacking: Most sections (#content2, #container3_0, #content9, #heading10, #content11) transition from horizontal (flex-direction: row or grid-template-columns) to vertical stacking (flex-direction: column). This optimizes scrolling on narrow screens, preventing horizontal overflow.
* Images & Text Blocks: Image max-width is adjusted, and text block widths become auto to allow natural text wrapping, improving readability.
* Buttons: Some buttons are hidden (.butt4) or adjusted in width to be more finger-friendly.
* Testimonials & FAQs: These sections adapt to stack their content items vertically, ensuring each piece is clearly presented on a small screen.
* This mobile-first approach at 450px ensures a solid user experience on the most constrained devices, with the larger screen styles serving as the default.

### Creative Divergences from Mockup

* Beyond the specific color palette, this CSS implementation introduces several creative and functional enhancements that might not have been explicitly detailed in a static design mockup:

### Dynamic Pulsating Elements:
* The borderPulse animation applied to the tour/pricing cards in Section 7 (.cont7a, .cont7b, .cont7c) is a dynamic visual effect. Instead of static borders, they subtly pulse with alternating colors, creating an engaging and attention-grabbing effect for key offerings. This adds a layer of visual interest and interactivity.

* Pronounced Button Interaction Feedback: The :active states for many buttons (e.g., .butt2:active, .butt3_1:active) are designed with a stark color change (background-color: rgb(13, 13, 13); color: yellow;). This provides a very clear and immediate visual "pop" when a user clicks, enhancing the perceived responsiveness of the interface.
* Implicit Mobile Menu Functionality: The CSS for the .menu icon and the hidden nav ul on mobile strongly suggests the intended implementation of a JavaScript-driven hamburger menu. This prepares the UI for a common interactive pattern, allowing for a clean header on mobile while still providing full navigation on demand.
* Slider Integration for Sponsors: The presence of specific slick- prefixed classes (.slick-list, .slick-slide, .slick-track) in Section 6 implies the use of a third-party JavaScript carousel library (like Slick Slider). While a mockup might just show a static row of logos, the CSS sets up a dynamic, interactive image slider for sponsors, which enhances content presentation and space efficiency.
* Accordion-Style FAQ: The display: none property on elements like #prev, #prev1, and associated toggleprev buttons in Section 9 indicates an intended interactive FAQ section, likely using an accordion-style show/hide mechanism. This transforms a potentially static list of questions into an interactive, space-saving element, improving user experience for information discovery.
* These design choices aim to provide a more engaging, responsive, and intuitive user experience beyond what might be captured in a flat visual design.