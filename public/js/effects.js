//Code for initial splash screen animations
let array1 = document.querySelector('#gotcha1');
let array2 = document.querySelector('#gotcha2');
array1Split = array1.textContent.split('');
array2Split = array2.textContent.split('');
array1.innerHTML = '';
array2.innerHTML = '';

array1Split.forEach(letter => {
  array1.innerHTML += "<span class='effectLetterTop'>" + letter + "</span>";
});
array2Split.forEach(letter => {
  if(letter === '?') {
    array2.innerHTML += "<span class='questionMark'>" + letter + "</span>";
  } else {
    array2.innerHTML += "<span class='effectLetterBottom'>" + letter + "</span>";
  }
});

let counter1 = 0;
let counter2 = 0;
let firstDone = false;
let secondDone = false;
let timer = setInterval(addEffect, 70);

function setSplash() {
  const span1 = array1.querySelectorAll('span');
  span1.forEach(span => {
    if(span.innerHTML === 'p') {
      span.classList.add('splash');
    }
  })
  const span2 = array2.querySelectorAll('span');
  span2.forEach(span => {
    if((span.innerHTML === 'p') || (span.innerHTML === 'W') || (span.innerHTML === '?')) {
      span.classList.add('splash');
    } 
  })
}
setSplash();

function addEffect() {
  const span1 = array1.querySelectorAll('span')[counter1];
  if(span1.textContent !== ' ') {
    span1.classList.add('fade');
  }
  if(counter1 <= (array1Split.length - 2)) {
    counter1++;
  } else {
    firstDone = true;
  }

  const span2 = array2.querySelectorAll('span')[counter2];
  if((span2.textContent !== ' ') && (span2.textContent !== '?')) {
    span2.classList.add('fade');
  } else if(span2.textContent === '?') {
    span2.classList.add('questionMarkAnimate');
    span2.id = ('questionMarkBounce');
  }
  if(counter2 <= (array2Split.length - 2)) {
    counter2++;
  } else {
    secondDone = true;
  }

  if(firstDone && secondDone) {
    complete(timer);
    return;
  }
}

function complete(timer) {
  clearInterval(timer);
  timer = null;

  //Code for hover animation on each letter
  let letters = document.querySelectorAll('.fade');
  letters.forEach(letter => {
    letter.addEventListener('mouseover', (e) => hoverLetter(e));
  })
  
  function hoverLetter(e) {
    e.target.classList.add('hoverLetter');
    setTimeout(() => resetLetter(e), 300);

    function resetLetter(e) {
      e.target.classList.remove('hoverLetter');
    }
  }
}


//Down chevron bounce animation
const chevron = document.getElementById('chevron-div');
function chevronUp() {
  chevron.style.transform = 'translateY(-20px)';
}
function chevronDown() {
  chevron.style.transform = 'translateY(0px)';
}

function oneCycle() {
  chevronUp();
  setTimeout(chevronDown, 400);
}
function bounceChevron() {
  setTimeout(oneCycle, 1500);
}
bounceChevron();
setInterval(bounceChevron, 1900);


//Code for Projects section animations
window.addEventListener('scroll', addAnimation);
let projects = document.getElementById('Projects');
let cardArray = document.querySelectorAll('.card');

function addAnimation() {
  let timer2 = setInterval(animate, 300);
  let i = 0;

  function animate() {
    if(window.pageYOffset >= projects.offsetTop - window.pageYOffset + 300) {
      cardArray[i].classList.add('fadeCard');
      if(i < 2) {
        i++;
      } else {
        complete(timer2);
        return;
      }
    }
  }
}

