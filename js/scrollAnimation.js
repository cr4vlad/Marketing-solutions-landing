var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
    window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
    });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var screen2 = document.querySelector("#screen2");
var leftInfoBlocks = document.querySelectorAll(".left");
var rightInfoBlocks = document.querySelectorAll(".right");

function scrolling(e) {
    if (isVisible(screen2)) {
        screen2.classList.add("active");
    } else {
        screen2.classList.remove("active");
    }

    checkElements(leftInfoBlocks);
    checkElements(rightInfoBlocks);
}

function checkElements(infoBlocks) {
    for (var i = 0; i < infoBlocks.length; i++) {
        var infoBlock = infoBlocks[i];
 
        if (isVisible(infoBlock)) {
            infoBlock.classList.add("active");
        } else {
            infoBlock.classList.remove("active");
        }
    }
}

function isVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}