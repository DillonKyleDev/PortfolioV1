let lettersArray1 = document.querySelector('#gotcha1').childNodes;
let lettersArray2 = document.querySelector('#gotcha2').childNodes;

for(let i = 0; i < lettersArray1.length; i++) {
  if(lettersArray1[i].innerText !== undefined) {
    lettersArray1[i].style.cssText = 'font-size: 3.5rem;'
  }
}
for(let i = 0; i < lettersArray2.length; i++) {
  if(lettersArray2[i].innerText !== undefined) {
    lettersArray2[i].style.cssText = 'font-size: 3.5rem;'
  }
}

function resizeLetters() {
  let modifier1 = 1;
  
  for(let i = 0; i < lettersArray1.length; i++) {
    if(lettersArray1[i].innerText !== undefined) {
      if(lettersArray1[i].style.fontSize === '3.5rem') {
        lettersArray1[i].style.cssText = `transition: font-size ${modifier1}s ${modifier1}s; font-size: 4rem;`;
        modifier1 = modifier1 + .1;
      } else if(lettersArray1[i].style.fontSize === '4rem') {
        lettersArray1[i].style.cssText = `transition: font-size ${modifier1}s ${modifier1}s; font-size: 3.5rem;`;
        modifier1 = modifier1 - .1;
      }
    }
  }

  let modifier2 = 1;

  for(let i = 0; i < lettersArray2.length; i++) {
    if(lettersArray2[i].innerText !== undefined) {
      if(lettersArray2[i].style.fontSize === '3.5rem') {
        lettersArray2[i].style.cssText = `transition: font-size ${modifier2}s ${modifier2}s; font-size: 4rem;`;
        modifier2 = modifier2 + .1;
      } else if(lettersArray2[i].style.fontSize === '4rem') {
        lettersArray2[i].style.cssText = `transition: font-size ${modifier2}s ${modifier2}s; font-size: 3.5rem;`;
        modifier2 = modifier2 - .1;
      }
    }
  }
}
resizeLetters();
setInterval(resizeLetters, 7000);