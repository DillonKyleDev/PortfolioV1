//Code for initial splash screen animations
let array1 = document.querySelector('#gotcha1');
let array2 = document.querySelector('#gotcha2');
array1Split = array1.textContent.split('');
array2Split = array2.textContent.split('');
array1.innerHTML = '';
array2.innerHTML = '';

array1Split.forEach(letter => {
  array1.innerHTML += "<span>" + letter + "</span>";
});
array2Split.forEach(letter => {
  array2.innerHTML += "<span>" + letter + "</span>";
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
    if((span.innerHTML === 'p') || (span.innerHTML === 'W')) {
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
  if(span2.textContent !== ' ') {
    span2.classList.add('fade');
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
}


//Code for Projects section animations
window.addEventListener('scroll', addAnimation);
let projects = document.getElementById('Projects');
let cardArray = document.querySelectorAll('.card');

function addAnimation() {
  let timer2 = setInterval(animate, 300);
  let i = 0;

  function animate() {
    if(window.pageYOffset >= projects.offsetTop - window.pageYOffset) {
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

