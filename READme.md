# Project CSS Styling

This repository contains the CSS styling for a web project, outlining the design choices for colors, responsiveness, and unique creative elements.

## Public link

[TRAVEL KENYA](https://finale-project-two.vercel.app/?authuser=0)

## Color System

My color palette was chosen to evoke a sense of **modernity, professionalism, and vibrancy**.

* **Primary Dark Accent: `#2c3e50` (Dark Slate Gray)**
    * Used for the `header` background. This deep, sophisticated color provides a strong foundation and a professional feel, ensuring the navigation stands out clearly against a light page background.
* **Primary Light Background: `whitesmoke`**
    * The main `background-color` for the `#main` content. This near-white shade offers a clean, airy, and modern canvas, making the content highly readable and visually appealing.
* **Highlight/Call-to-Action Color 1: `sandybrown`**
    * Used for buttons (`.butt1`, `.butt2`, `.butt3_1`, `.butt4`, `.butt8`). This warm, inviting, and slightly playful color is chosen to draw attention to interactive elements, encouraging user engagement. Its earthy tone also adds a touch of natural warmth.
* **Highlight/Call-to-Action Color 2: `yellowgreen`**
    * Used for the testimonial/feature boxes (`.cont7a`, `.cont7b`, `.cont7c`) and button hovers. This fresh and energetic color signifies growth, vitality, and positivity, making the testimonial sections feel uplifting and creating a clear hover state for buttons.
* **Accent Color for Text/Elements: `#dbfa2d` (Bright Lime Green)**
    * Specifically applied to `.container1` for text, this vibrant, almost neon green adds a striking, modern pop, creating a strong contrast against the background image in the hero section and ensuring important text grabs immediate attention.
* **Secondary Dark Accent: `#6D712E` (Dark Olive Green)**
    * Used for `.butt8`, this deeper green offers a slightly more subdued yet still natural and trustworthy feel, providing a variation for call-to-action buttons.
* **Active State Color: `lightblue` (for `.butt1:active`) / `rgb(13, 13, 13)` (near black for other buttons)**
    * These colors provide clear visual feedback when a button is clicked, enhancing the user experience. The `lightblue` on `.butt1` offers a softer, more approachable feedback, while the darker shade on others provides a more definite "pressed" feel.
* **Text Color: `black` (default for `#main`) / `white` (for `header` text)**
    * Standard black text on light backgrounds ensures optimal readability, while white text on the dark header maintains contrast and legibility.

---

## Breakpoint Logic

The design employs a mobile-first approach, progressively enhancing the layout for larger screens using `max-width` media queries. The breakpoint logic primarily focuses on adapting `flex-direction` and content sizing to ensure optimal viewing across various devices.

* **`@media (max-width: 1000px)` (Larger Tablets / Smaller Desktops):**
    * Most major content sections (`#content1` through `#content11`) switch their `flex-direction` to `column`. This means elements that were side-by-side on larger screens will now stack vertically, which is more appropriate for narrower viewports.
    * Containers within these sections (`.container1` etc.) are set to `width: 100%`, allowing them to fill the available horizontal space.
    * The `nav ul` also switches to a `column` layout, making the navigation links stack vertically for better usability on narrower screens.
    * Images within content sections (`.image1`, `.image2`, etc.) are adjusted to `width: 100%` and `height: auto` to maintain aspect ratio and prevent overflow.

* **`@media (max-width: 750px)` (Tablets / Larger Phones in Landscape):**
    * The `header` padding is slightly reduced for a more compact look.
    * `nav ul` margins are tightened.
    * Container paddings are reduced to `10px`, further optimizing space.
    * Image `border-radius` is reduced to `20px` to fit the smaller overall aesthetic.
    * The `#content11` (grid layout) switches from a `grid-template-columns: 1fr 1fr` to a single `1fr` column, stacking its content vertically.

* **`@media (max-width: 500px)` (Most Smartphones):**
    * The `#main` padding is further reduced.
    * Header font size is slightly decreased.
    * `nav ul li` margins are minimized.
    * All major content containers and their internal elements are explicitly set to `flex-direction: column` and `width: 100%` with minimal padding, ensuring content stacks neatly.
    * Image `border-radius` is further reduced to `10px`.

* **`@media (max-width: 450px)` (Smaller Smartphones):**
    * This breakpoint reinforces the column layout for all major content sections and containers, ensuring consistent stacking.
    * Images are explicitly set to `max-width: 100%`, `height: auto`, and `display: block` with `margin: 0 auto` to ensure they are centered and responsive.
    * The testimonial boxes (`.cont7a`, `.cont7b`, `.cont7c`) also switch to `width: 100%` and `height: auto` with auto margins for vertical stacking and centering.
    * Button widths are set to `100%` and padding adjusted for better tap targets on very small screens.
    * Heading font sizes (`h1`, `h2`, `h3`, `h6`) are reduced to `1.2rem` for better fit.

* **`@media (max-width: 400px)` (Very Small Smartphones):**
    * Further reductions in `#main` padding, header font size, `nav ul li` margins, and container paddings.
    * Image `border-radius` is reduced to `5px`.

* **`@media (max-width: 320px)` (Tiny Devices):**
    * Minimal padding and margins are applied to ensure content remains visible and usable on the absolute smallest screens.
    * Image `border-radius` is reduced to `3px`.

---

## Creative Divergences from Mockup (Beyond Colors)

While I don't have the original mockup, based on the provided CSS, here are some likely creative divergences that enhance the user experience and visual appeal:

1.  **Dynamic Button States:** I've implemented distinct `:hover` and `:active` states for almost all buttons, using `transition` for smooth visual feedback. For example, `.butt1` transitions to `rgb(59, 59, 214)` (a vibrant blue) on hover and `lightblue` with `yellow` text on active. Other buttons shift to `yellowgreen` on hover. This is a common enhancement not always detailed in static mockups but greatly improves interactivity.
2.  **Pulsating Testimonial Boxes:** The `.cont7a`, `.cont7b`, `.cont7c` elements feature a `borderPulse` keyframe animation. This creates a subtle, glowing border effect that cycles between `yellowgreen` and `orange`. This dynamic visual cue draws attention to these important sections without being overly distracting, making them feel more engaging than static boxes.
3.  **Flexible Image Handling:** Instead of fixed image sizes, the CSS extensively uses `width: 100%` and `height: auto` with `object-fit: cover` and `object-position: center` (e.g., `.image9`, `.spnr`). This ensures images are always responsive, fill their containers appropriately, and maintain their aspect ratio, which is crucial for a fluid layout across devices.
4.  **Strategic Use of `position: absolute`:** Elements like `.container1`, `.container4_1`, and `.container8_1` leverage `position: absolute` to overlay text content directly onto images. This allows for visually rich hero sections where text is integrated seamlessly with background imagery, a technique that adds depth and sophistication often requiring careful implementation beyond simple mockups.
5.  **Emphasis on `border-radius`:** A consistent use of `border-radius` (e.g., `40px` for `.image1`, `30px` for `.image2`, `.image3`, `.image4`, `#container3_2`, `#content11` containers, and `25px` for many buttons) is applied across various elements. This subtle but prevalent design choice creates a softer, more modern, and friendly aesthetic compared to sharp, square edges, suggesting a deliberate styling preference.
6.  **"Never wrap" for bank name:** The `#bankname` rule with `text-wrap: nowrap;` ensures that the bank name will always appear on a single line, preventing awkward breaks on smaller screens. This is a small but impactful detail for branding.