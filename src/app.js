const slides = document.querySelectorAll('#slides .slide');
const previous = document.querySelector('.previous');
const pauseButton = document.querySelector('.pause');
const next = document.querySelector('.next');

class SlideShow {
    constructor(slides, previous, pauseButton, next) {
        this.slides = slides;
        this.previous = previous;
        this.pauseButton = pauseButton;
        this.next = next;

        this.currentSlide = 0;
        this.playing = true;

        this.openNext = this.openNext.bind(this);
        this.openPrevious = this.openPrevious.bind(this);
        this.togglePause = this.togglePause.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.openSlide = this.openSlide.bind(this);

        this.slideInterval = setInterval(this.nextSlide, 3000);
    }

    openNext() {
        this.pause();
        this.nextSlide();
    }

    openPrevious() {
        this.pause();
        this.previousSlide();
    }

    togglePause() {
        this.playing ? this.pause() : this.play();
    }

    pause() {
        this.pauseButton.className = 'play';
        this.playing = false;
        clearInterval(this.slideInterval);
    }

    play() {
        this.pauseButton.className = 'pause';
        this.playing = true;
        this.slideInterval = setInterval(this.nextSlide, 3000);
    }

    openSlide(position) {
        this.slides[this.currentSlide].className = 'slide';
        this.currentSlide = (position + this.slides.length) % this.slides.length;
        this.slides[this.currentSlide].className = 'slide showing';
    }

    nextSlide() {
        this.openSlide(this.currentSlide + 1);
    }
    
    previousSlide() {
        this.openSlide(this.currentSlide - 1);
    }
}

const slideShow = new SlideShow(slides, previous, pauseButton, next);

next.addEventListener('click', slideShow.openNext);
previous.addEventListener('click', slideShow.openPrevious);
pauseButton.addEventListener('click', slideShow.togglePause);

