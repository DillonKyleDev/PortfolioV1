window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

let astronaut = document.querySelector('#astronaut');
//variables for astronaut
let xPos = 0;
let yPos = 52;
let goPosX = true;
let goPosY = true;

//sets rotation for astronaut
let rotateAstro1 = function() {
  astronaut.style.transform = 'rotate(1440deg)';
}
let rotateAstro2 = function() {
  astronaut.style.transform = 'rotate(-960deg)';
}
let rotateAstro3 = function() {
  astronaut.style.transform = 'rotate(5000deg)';
}

let moveAstronaut = function() {
  //assess if astronaut should move positively or negatively
  if(xPos == 0) {
    goPosX = true;
    rotateAstro1();
  }
  if(xPos == window.innerWidth - 65) {
    goPosX = false;
    rotateAstro2();
  }
  //accounts for the fixed nav bar
  if(yPos == 52) {
    goPosY = true;
    rotateAstro1();
  }
  if(yPos == window.innerHeight - 50) {
    goPosY = false;
    rotateAstro2();
  }
  //keeps astronaut within the window
  if((yPos > window.innerHeight) || (yPos < 52)) {
    yPos = 52;
    goPosY = true;
  }
  if((xPos > window.innerWidth) || (xPos < 0)) {
    xPos = 0;
    goPosX = true;
  }

  //increments the astronauts position based on above checks
  if(goPosX) {
    xPos+=.5;
  }
  if(!goPosX) {
    xPos-=.5;
  }
  if(goPosY) {
    yPos+=.5;
  }
  if(!goPosY) {
    yPos-=.5;
  }
  //sets positions
  astronaut.style.left = xPos + 'px';
  astronaut.style.top = yPos + 'px';
  setTimeout(moveAstronaut, 10);
}

moveAstronaut();