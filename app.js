
let NextDom = document.getElementById('Next');
let PrevDom = document.getElementById('Prev');

let CarouselDom = document.querySelector('.Carousel');
let SliderDom = document.querySelector('.Carousel .List');
let ThumbnailBorderDom = document.querySelector('.Carousel .Thumbnail');
let ThumbnailItemsDom = ThumbnailBorderDom.querySelectorAll('.Items');
let Timedom = document.querySelector('.Carousel .Time');
 
NextDom.onclick = function(){
    ShowSlider('Next');
}


let TimeRunning =2000;
let RunTimeOut;

function ShowSlider (type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.Carousel .List .Items');
    let  ThumbnailItemsDom = document.querySelectorAll('.Carousel .Thumbnail .Items');

    if(type === 'Next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        ThumbnailBorderDom.appendChild(ThumbnailItemsDom[0]);
        CarouselDom.ClassList.add('Next');
    }

clearTimeout(RunTimeOut);
RunTimeOut = setTimeOut (() => {
    CarouselDom.ClassList.remove('next');
}, TimeRunning );

}