# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

(./images/EasyBank%20Screenshot.png)

### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: (https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Working on the project was a good practice in positioning elements on the screen. The hero section of the page includes an image placed on top of another image. The background image is so placed as to showcase a certain portion (bottom-left) of it and the image on top of it must also be positioned a little to the top-right. This has been achieved using the following code: 

```html
<div class="hero-image">
  <div class="display"></div>
  <img src="images/image-mockups.png" alt="image-mockups" class="fg-image">
</div>
```

```css
.hero-image{
    width: 100%;
    position: relative; 
    height: 20rem;
}

.display{
    width: 100%;
    min-height: 63vh;
    background: url(images/bg-intro-mobile.svg) no-repeat;
    position: relative;
    top: -5rem;
}

.fg-image{
    width: 100%;
    position: absolute;
    top: -25vh;
    left: 0;
    padding: 1.5rem;
}
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
