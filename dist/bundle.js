/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const slides = document.querySelectorAll('#slides .slide');\r\nconst previous = document.querySelector('.previous');\r\nconst pauseButton = document.querySelector('.pause');\r\nconst next = document.querySelector('.next');\r\n\r\nclass SlideShow {\r\n    constructor(slides, previous, pauseButton, next) {\r\n        this.slides = slides;\r\n        this.previous = previous;\r\n        this.pauseButton = pauseButton;\r\n        this.next = next;\r\n\r\n        this.currentSlide = 0;\r\n        this.playing = true;\r\n\r\n        this.openNext = this.openNext.bind(this);\r\n        this.openPrevious = this.openPrevious.bind(this);\r\n        this.togglePause = this.togglePause.bind(this);\r\n        this.nextSlide = this.nextSlide.bind(this);\r\n        this.openSlide = this.openSlide.bind(this);\r\n\r\n        this.slideInterval = setInterval(this.nextSlide, 3000);\r\n    }\r\n\r\n    openNext() {\r\n        this.pause();\r\n        this.nextSlide();\r\n    }\r\n\r\n    openPrevious() {\r\n        this.pause();\r\n        this.previousSlide();\r\n    }\r\n\r\n    togglePause() {\r\n        this.playing ? this.pause() : this.play();\r\n    }\r\n\r\n    pause() {\r\n        this.pauseButton.className = 'play';\r\n        this.playing = false;\r\n        clearInterval(this.slideInterval);\r\n    }\r\n\r\n    play() {\r\n        this.pauseButton.className = 'pause';\r\n        this.playing = true;\r\n        this.slideInterval = setInterval(this.nextSlide, 3000);\r\n    }\r\n\r\n    openSlide(position) {\r\n        this.slides[this.currentSlide].className = 'slide';\r\n        this.currentSlide = (position + this.slides.length) % this.slides.length;\r\n        this.slides[this.currentSlide].className = 'slide showing';\r\n    }\r\n\r\n    nextSlide() {\r\n        this.openSlide(this.currentSlide + 1);\r\n    }\r\n    \r\n    previousSlide() {\r\n        this.openSlide(this.currentSlide - 1);\r\n    }\r\n}\r\n\r\nconst slideShow = new SlideShow(slides, previous, pauseButton, next);\r\n\r\nnext.addEventListener('click', slideShow.openNext);\r\nprevious.addEventListener('click', slideShow.openPrevious);\r\npauseButton.addEventListener('click', slideShow.togglePause);\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;