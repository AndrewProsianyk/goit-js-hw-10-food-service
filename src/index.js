import './sass/main.scss';
import menuCardsTpl from './templates/menu-cards.hbs';
import menuData from './menu.json';


const markupContainer = document.querySelector('.js-menu');
const creatingMarkup = menuCardsTpl(menuData);

markupContainer.insertAdjacentHTML('beforeend', creatingMarkup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
themeSwitcher.addEventListener('change', onThemeSwitcherChange);
const bodyEl = document.querySelector('body');


if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', Theme.LIGHT);
};

bodyEl.classList = localStorage.getItem('theme');

if (localStorage.getItem('theme') === Theme.DARK) {
  themeSwitcher.checked = true;
};

function onThemeSwitcherChange() {
  if (themeSwitcher.checked) {
    if (bodyEl.classList.contains(Theme.LIGHT)) {
      bodyEl.classList.remove(Theme.LIGHT);
    };
    bodyEl.classList.add(Theme.DARK);
    themeSwitcher.setAttribute('checked',true)
    localStorage.setItem('theme', bodyEl.classList);
  }
  
  else {
    if (bodyEl.classList.contains(Theme.DARK)) {
      bodyEl.classList.remove(Theme.DARK);
    };
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', bodyEl.classList)
  }
};
