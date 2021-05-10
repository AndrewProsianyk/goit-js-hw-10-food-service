import './sass/main.scss';
import menuCardsTpl from './templates/menu-cards.hbs';
import menuData from './menu.json';


const markupContainer = document.querySelector('.js-menu');
const creatingMarkup = menuCardsTpl(menuData);

markupContainer.insertAdjacentHTML('beforeend', creatingMarkup);