// Write your code here!
const specialMain = document.getElementById('main');
specialMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Hayat is the champion";

const body = document.querySelector('body');
body.appendChild(newHeader);
