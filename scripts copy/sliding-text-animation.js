const fps = 30;

let slidingWrapper = document.querySelector('header#scroll-by-anim > div');
let childrenOfWrapper = slidingWrapper.children;

// Calculate the collective width of all three divs
let collectiveWidth = 0;
for (let i = 0; i < childrenOfWrapper.length; i++) {
    collectiveWidth += childrenOfWrapper[i].clientWidth;
}

// Initialize translation values to start the animation from the right side
let translationValue1 = 0;
let translationValue2 = 0;
let translationValue3 = 0;
let translationValue4 = 0;
let translationValue5 = 0;

setInterval(function() {
    if (isElementInViewport(slidingWrapper.parentElement)) {
    translationValue1 -= 4;
    translationValue2 -= 4;
    translationValue3 -= 4;
    translationValue4 -= 4;
    translationValue5 -= 4;

    childrenOfWrapper[0].style.transform = `translateX(${translationValue1}px)`;
    childrenOfWrapper[1].style.transform = `translateX(${translationValue2}px)`;
    childrenOfWrapper[2].style.transform = `translateX(${translationValue3}px)`;
    childrenOfWrapper[3].style.transform = `translateX(${translationValue4}px)`;
    childrenOfWrapper[4].style.transform = `translateX(${translationValue5}px)`;

    if (isOutOfBounds(childrenOfWrapper[0])) {
        translationValue1 = collectiveWidth - childrenOfWrapper[0].clientWidth*2 - 75;
    }
    if (isOutOfBounds(childrenOfWrapper[1])) {
        translationValue2 = translationValue1;
    }
    if (isOutOfBounds(childrenOfWrapper[2])) {
        translationValue3 = translationValue2; 
    }
    if (isOutOfBounds(childrenOfWrapper[3])) {
        translationValue4 = translationValue3; 
    }
    if (isOutOfBounds(childrenOfWrapper[4])) {
        translationValue5 = translationValue4; 
    }
    }
}, 1000 / fps);

function isOutOfBounds(element) {
    const bounding = element.getBoundingClientRect();
    return bounding.right <= 0;
} 

function isElementInViewport(element) {
    var boundingRect = element.getBoundingClientRect();
    return (
        boundingRect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}