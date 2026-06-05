# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 📦 Project Packages Usage Guide

This project uses several frontend libraries to speed up UI development and add interactive features. Below is a simple guide on how each package is used with examples.

---

# 1️⃣ Bootstrap (UI Framework)

Bootstrap helps build responsive layouts and ready-made UI components.

## Import (main.jsx)

```js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

## Example (Responsive Grid)

```jsx
<div className="container">
  <div className="row">
    <div className="col-md-6">Left</div>
    <div className="col-md-6">Right</div>
  </div>
</div>
```

---

# 2️⃣ Font Awesome (Icons)

Used to display modern vector icons anywhere in the UI.

## Setup (main.jsx — one time)

```js
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);
```

## Usage (Any Component)

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid icon
<FontAwesomeIcon icon="fa-solid fa-user" />

// Brand icon
<FontAwesomeIcon icon="fa-brands fa-instagram" />

// Regular (outline) icon
<FontAwesomeIcon icon="fa-regular fa-heart" />
```

---

# 3️⃣ AOS (Animate On Scroll)

Adds scroll-based animations to elements.

## Import CSS (main.jsx)

```js
import "aos/dist/aos.css";
```

## Initialize (App.jsx)

```jsx
import { useEffect } from "react";
import AOS from "aos";

useEffect(() => {
 
  AOS.init({ duration: 1000,once: false });
 
  AOS.init({ duration: 1000, once: true });
 
}, []);
```

## Usage

```jsx
<div data-aos="fade-up">
  Animated content
</div>
```

---

# 4️⃣ Splide (Slider / Carousel)

Used to create responsive sliders.

## Import CSS (main.jsx)

```js
import "@splidejs/splide/css";
```

## Basic Usage (Component)

```jsx
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";

function ImageSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    new Splide(sliderRef.current, {
      type: "loop",
      perPage: 3,
      autoplay: true,
    }).mount();
  }, []);

  return (
    <div className="splide" ref={sliderRef}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">Slide 1</li>
          <li className="splide__slide">Slide 2</li>
          <li className="splide__slide">Slide 3</li>
        </ul>
      </div>
    </div>
  );
}
```

---

# 5️⃣ jQuery (Legacy Plugin Support)

Used only to support older jQuery-based plugins.

## Setup (main.jsx)

```js
import $ from "jquery";
window.$ = window.jQuery = $;
```

---

# 6️⃣ jQuery Validation (Form Validation)

Adds easy client-side form validation.

## Import (main.jsx)

```js
import "jquery-validation";
```

## Example

```html
<form id="myForm">
  <input type="email" name="email" />
  <input type="password" name="password" />
  <button type="submit">Submit</button>
</form>
```

```js
$("#myForm").validate({
  rules: {
    email: { required: true, email: true },
    password: { required: true, minlength: 6 },
  },
});
```

---

# ✅ Notes

• Global CSS and libraries are imported once in `main.jsx`
• No need to import them again in every component
• Old template JS/CSS files were removed because npm handles them
• jQuery is only used where necessary (validation or old plugins)

---

# 🚀 You’re Ready to Build

This setup supports modern React development while keeping compatibility with template-based plugins.
