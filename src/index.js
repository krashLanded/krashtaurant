import './style.css';

//default header section. this part does not change on the site
const content = document.querySelector('.content');

const header = document.createElement('div');
header.innerHTML = 'krashtaurant';
header.classList.add('header');

const headerSub = document.createElement('div');
headerSub.classList.add('headersub');
headerSub.innerHTML = 'a collection of my favorites';

header.appendChild(headerSub);
content.appendChild(header);
//

//button section, holds buttons about the restaurant which can be changed with clicking
//
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
content.appendChild(buttonContainer);
//
//button creation
const homeButton = document.createElement('button');
homeButton.classList.add('homeButton');
homeButton.innerHTML = 'home';
buttonContainer.appendChild(homeButton);
const menuButton = document.createElement('button');
menuButton.classList.add('menuButton');
menuButton.innerHTML = 'menu';
buttonContainer.appendChild(menuButton);
const contactButton = document.createElement('button');
contactButton.classList.add('contactButton');
contactButton.innerHTML = 'contact';
buttonContainer.appendChild(contactButton);





