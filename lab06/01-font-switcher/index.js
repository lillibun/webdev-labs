let currentFontSize = 1.4;
let titleFontSize = 2.0;

//use . for class name
const makeBigger = () => {
   currentFontSize += 0.1;
   titleFontSize += 0.1;
   document.querySelector(".content").style.fontSize = currentFontSize + "rem";
// division names don't need a period or a hashtah
   document.querySelector("h1").style.fontSize = titleFontSize + "rem";
};

const makeSmaller = () => {
   currentFontSize -= 0.1;
   titleFontSize -= 0.1;
   document.querySelector(".content").style.fontSize = currentFontSize + "rem";
// division names don't need a period or a hashtah
   document.querySelector("h1").style.fontSize = titleFontSize + "rem";
};

// use # for an id 
document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

