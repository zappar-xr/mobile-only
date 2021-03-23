# Mobile Only

![Build](https://github.com/zappar-xr/mobile-only/workflows/Build/badge.svg)


This library allows you to redirect desktop users to mobile by displaying a QR code alongside instructions for the user to follow.

<img src="docs/images/preview.png" width="300"/>

## Table Of Contents
<details>
<summary>Click to expand table of contents</summary>

<!--ts-->
   * [Mobile Only](#mobile-only)
      * [Table Of Contents](#table-of-contents)
      * [Starting Development](#starting-development)
         * [Standalone Download](#standalone-download)
         * [CDN](#cdn)
         * [NPM Webpack Package](#npm-webpack-package)
      * [Usage](#usage)
         * [Detecting Browsers](#detecting-browsers)
         * [Displaying the UI](#displaying-the-ui)
            * [Default](#default)
            * [Customization](#customization)

<!-- Added by: zapparadmin, at: Tue Mar 23 15:19:23 GMT 2021 -->

<!--te-->
</details>

## Starting Development

You can use this library by downloading a standalone zip containing the necessary files, by linking to our CDN, or by installing from NPM for use in a webpack project.


### Standalone Download

Download the bundle from this link:
https://libs.zappar.com/zappar-mobile-only/0.0.1/zappar-mobileonly.zip

Unzip into your web project and reference from your HTML like this:
```html
<script src="zappar-mobileonly.js"></script>
```

### CDN

Reference the zappar-mobileonly.js library from your HTML like this:
```html
<script src="https://libs.zappar.com/zappar-mobile-only/0.0.1/zappar-mobileonly.js"></script>
```

### NPM Webpack Package

Run the following NPM command inside your project directory:
```bash
$ npm install --save @zappar/mobile-only
```

Then import the library into your JavaScript or TypeScript files:
```ts
import * as MobileOnly from "@zappar/mobile-only";
```

## Usage

### Detecting Browsers

The `MobileOnly.isMobile()` function returns true if a mobile browser is being used.

```ts
import * as MobileOnly from "@zappar/mobile-only";
const mobile = MobileOnly.isMobile(); // boolean
console.log(mobile);
```

User agent can be provided to the `isMobile()` function, if not specified, `navigator.userAgent` is used:


```ts
import * as MobileOnly from "@zappar/mobile-only";
const mobile = MobileOnly.isMobile('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');
console.log(mobile);
```

### Displaying the UI

The QR code shown is generated from the current `window.location.href`.

#### Default

You can show the redirection UI using `MobileOnly.showUI()`. This should be used alongside `MobileOnly.isMobile()`:

```ts
import * as MobileOnly from "@zappar/mobile-only";

if (!MobileOnly.isMobile()){
  MobileOnly.showUI();
}
```

The `showUI` function appends the elements as children of `document.body`, with `z-index` of 10000.

#### Customization

`showUI()` function may be customized using an options parameter. Here's the available options alongside default values:

```ts
type Options = {
    header? : string,       // 'Almost there...';
    instructions? : string, // "Use your phone's camera to scan the QR code below";
    footer? : string,       // 'or visit';
    url? : string           //  window?.location?.href || '0.0.0.0';
}
```

Example:

```ts
import * as MobileOnly from "@zappar/mobile-only";

if (!MobileOnly.isMobile()){
  MobileOnly.showUI({
    url : 'www.zappar.com'
  });
}
```

This shows the UI seen at the top of this readme.

