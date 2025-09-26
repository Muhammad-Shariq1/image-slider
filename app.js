let NextDom = document.getElementById('Next');
let PrevDom = document.getElementById('Prev');

let CarouselDom = document.querySelector('.Carousel');
let SliderDom = document.querySelector('.Carousel .List');
let ThumbnailBorderDom = document.querySelector('.Carousel .Thumbnail');
let Timedom = document.querySelector('.Carousel .Time');

NextDom.onclick = function() {
    ShowSlider('Next');
};

PrevDom.onclick = function() {
    ShowSlider('Prev');
};

let TimeRunning = 2000;
let RunTimeOut;

function ShowSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.Items');
    let ThumbnailItemsDom = ThumbnailBorderDom.querySelectorAll('.Items');

    if (type === 'Next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        ThumbnailBorderDom.appendChild(ThumbnailItemsDom[0]);
        CarouselDom.classList.add('Next');
    } else if (type === 'Prev') {
        let lastSliderItem = SliderItemsDom[SliderItemsDom.length - 1];
        let lastThumbnailItem = ThumbnailItemsDom[ThumbnailItemsDom.length - 1];
        SliderDom.prepend(lastSliderItem);
        ThumbnailBorderDom.prepend(lastThumbnailItem);
        CarouselDom.classList.add('Prev');
    }

    clearTimeout(RunTimeOut);
    RunTimeOut = setTimeout(() => {
        CarouselDom.classList.remove('Next');
        CarouselDom.classList.remove('Prev');
    }, TimeRunning);
}
