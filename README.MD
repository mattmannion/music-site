- BEM Architecture in use for css(scss)  -  https://css-tricks.com/bem-101/

- 7-1 Pattern Architecture in use for Sass files and folders  -  https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture

- MVC Architecture in use for JavaScript  -    https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm

- npm scripts:

- start: ("start": "live-server dist/ & parcel src/index.html src/html/products/_.html scr/html/business/_.html")

    -live-server is started to watch the compiled site changes made by parcel
    -live-server is used over parcel's built in server for more reliable page refreshing

    -parcel uses linked main.scss file in all html heads to compile and link scss to css
    -parcel needs to be pointed to each location to compile and link files correctly and reliably (see above or package.json)

- build: ("build": "parcel build src/index.html src/html/products/*.html scr/html/business/*.html")

    -builds all files with parcel; compiling, linking, and compressing all work for production
