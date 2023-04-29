import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

const aHome = document.getElementById('home');
const aMenu = document.getElementById('menu');
const aContact = document.getElementById('contact');
const content = document.getElementById('content');

function display(e) {
  switch (e.target.id) {
    case 'home':
      content.removeChild(content.firstChild);
      content.appendChild(home());
      break;
    case 'menu':
      content.removeChild(content.firstChild);
      content.appendChild(menu());
      break;
    case 'contact':
      content.removeChild(content.firstChild);
      content.appendChild(contact());
      break;
  }
};

aHome.addEventListener('click', e => display(e));
aMenu.addEventListener('click', e => display(e));
aContact.addEventListener('click', e => display(e));

content.appendChild(home());