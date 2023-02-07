# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](https://user-images.githubusercontent.com/42536943/216782814-38f7f611-bae0-41d4-acaa-c8224b776e3c.png)


### Links

- [ Solution URL ](https://www.frontendmentor.io/solutions/ecommerce-product-page-sICex9V4dl)
- [Live Site URL ](https://frontend-ecommerce-product-page.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - CSS framework


### What I learned

The advantages of using Vite over Create React App
- Faster build times: Vite is built with performance in mind, and it is optimized for faster build times compared to CRA
- Lighter setup: Vite has a more lightweight setup process compared to CRA, which can make it easier for developers to get started with a new project.
- Faster HMR(hot module replacement), since the entire application does not need to be recompiled every time a change is made thus improved development experinece.


You can use @apply keyword to add existing tailwind utility classes into your own custom CSS.

```css
 nav a {
      @apply font-bold text-gray-800 cursor-pointer flex;
  }
```

I learned how to create reusable button components with different styles applied to them

```
const buttons = {
    SolidButton: function SolidButton({children}){
      return(
          <button className='flex items-center bg-orange-500 hover:bg-orange-400 text-white shadow py-2 lg:py-0 px-4 mt-3 lg:mt-0 rounded-lg justify-center w-full lg:w-1/2'>{children}</button>
      )
    },
    OutlineButton: function OutlineButton({children}){
      return(
          <button className='flex items-center bg-gray-200 hover:bg-orange-100 text-orange-500 py-2 rounded-lg justify-evenly mr-3 w-full lg:w-1/2'>{children}</button>
      )
    }
  }
  export default buttons;
```


### Continued development
- Implement Add to Cart and Delete from Cart functionality
- Add a lightbox

### Useful resources

- [Vite](https://vitejs.dev/guide/) - This helped me to set up the project. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Hellen](https://hellenkokach.me/)
- Frontend Mentor - [@hellen17](https://www.frontendmentor.io/profile/hellen17)

