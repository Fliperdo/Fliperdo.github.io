var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Thank the great Mozilla for this tutorial, ' + storedName;
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Thank the great Mozilla for this tutorial, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc !== 'images/space_dude.gif') {
      myImage.setAttribute ('src','images/space_dude.gif');
    } else {
      myImage.setAttribute ('src','images/mass_effect_3.jpg');
    }
}