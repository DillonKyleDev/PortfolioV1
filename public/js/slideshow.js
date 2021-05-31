const slideInit = document.querySelectorAll('.slideInit');
const astronaut2 = document.getElementById('astronaut');
const backdrop = document.getElementById('backdrop');
const slideshowBox = document.getElementById('slideshowBox');
const image = document.getElementById('imageSpot');
const arrows = document.querySelectorAll('.sliderButton');
let isDisplayed = false;

let tempInit = '';
let issIndex = 0;
let coffeeIndex = 0;

//image arrays for slideshow
let issImages = [];
for(let i = 1; i < 5; i++) {
  let tempNode = document.createElement('img');
  tempNode.src = `/images/Websites/iss${i}.png`;
  issImages.push(tempNode);
}
let coffeeImages = [];
for(let i = 1; i < 5; i++) {
  let tempNode = document.createElement('img');
  tempNode.src = `/images/Websites/coffee${i}.png`;
  coffeeImages.push(tempNode);
}

slideInit.forEach(element => {
  element.addEventListener('click', () => {
    openSlideshow(element.dataset.init);
  })
});
backdrop.addEventListener('click', () => {
  openSlideshow();
});
arrows.forEach(element => {
  element.addEventListener('click', () => {
    arrowClick(element.dataset.direction);
  })
});


function openSlideshow(init) {
  if(!isDisplayed) {
    tempInit = init;
    switch(init) {
      case 'iss':
        image.append(issImages[issIndex]);
        slideshowDisplay();
        break;
      case 'coffee':
        image.append(coffeeImages[coffeeIndex]);
        slideshowDisplay();
        break;
    }
  }
  else {
    slideshowHide();
    image.textContent = '';
  }
}

function arrowClick(direction) {
  //Here I decided to use temp values to remove an ugly nesting switch statement
  let index = 0;
  let imageArray;
  
  if(tempInit === 'iss') {
    imageArray = issImages;
    index = issIndex;
  } else if(tempInit === 'coffee') {
    imageArray = coffeeImages;
    index = coffeeIndex;
  };
  
  if(direction === 'right') {
    if(index < 3){
      index++;
    } else {index = 0};
  } else {
    if(index > 0){
      index--;
    } else {index = 3};
  };
  
  image.textContent = '';
  image.append(imageArray[index]);
  image.firstChild.style.cssText = 'visibility: visible;  opacity: 100;  width: 100%;  height: auto;';
  if(index > 1) {
    image.firstChild.style.cssText = 'visibility: visible;  opacity: 100; height: 100%; width: auto; margin: auto; transition: height .4s .4s;';
  }
  //reasign temp values to actual values for correctness
  if(tempInit === 'iss') {
    issImages = imageArray;
    issIndex = index;
  } else if(tempInit === 'coffee') {
    coffeeImages = imageArray;
    coffeeIndex = index;
  }
}

function slideshowDisplay() {
  astronaut2.style.cssText = 'opacity: 0; visibility: hidden;';
  backdrop.style.cssText = 'opacity: 100; visibility: visible;';
  slideshowBox.style.cssText = 'opacity: 100; visibility: visible; width: 90vw; transition: width .4s .4s';
  image.style.cssText = 'opacity: 100; visibility: visible; width: 100%; height: 100%;';
  if(tempInit === 'iss') {
    if(issIndex > 1) {
      image.firstChild.style.cssText = 'height: 100%; width: auto;';
    }
  }
  if(tempInit === 'coffee') {
    if(coffeeIndex > 1) {
      image.firstChild.style.cssText = 'height: 100%; width: auto;';
    }
  }
  arrows.forEach(element => {
    element.style.cssText = 'opacity: 100; visibility: visible;';
  });
  disableScroll();  
  isDisplayed = true;
}
function slideshowHide() {
  astronaut2.style.cssText = 'opacity: 100; visibility: visible;';
  backdrop.style.cssText = 'opacity: 0; visibility: hidden;';
  slideshowBox.style.cssText = 'opacity: 0; visibility: hidden; width: 0; transition: width 0s 0s';
  image.style.cssText = 'opacity: 0; visibility: hidden; width: 0;';
  if(tempInit === 'iss') {
    if(issIndex > 1) {
      image.style.cssText = 'width: 0;'
    }
  }
  if(tempInit === 'coffee') {
    if(coffeeIndex > 1) {
      image.style.cssText = 'width: 0;'
    }
  }
  arrows.forEach(element => {
    element.style.cssText = 'opacity: 0; visibility: hidden;';
  });
  enableScroll();
  isDisplayed = false;
}


//logic to prevent scrolling while slideshow is open
function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}