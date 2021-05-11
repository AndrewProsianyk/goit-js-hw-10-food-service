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

const themeSwitcher = document.querySelector('.theme-switch__toggle');
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
    localStorage.setItem('theme', bodyEl.classList);
    themeSwitcher.setAttribute('checked',true)
  }
  
  else {
    if (bodyEl.classList.contains(Theme.DARK)) {
      bodyEl.classList.remove(Theme.DARK);
    };
    localStorage.setItem('theme', bodyEl.classList)
    bodyEl.classList.add(Theme.LIGHT);
  }
};

// const themeCheckbox = document.querySelector('#theme-switch-toggle');
// themeCheckbox.addEventListener('change', onCheckboxStatusChange);
// const body = document.querySelector('body');

// if (localStorage.getItem('theme') === null) {localStorage.setItem('theme', Theme.LIGHT);}
// body.classList = localStorage.getItem('theme');
// if (localStorage.getItem('theme') === Theme.DARK){ 
//     themeCheckbox.checked = true; 
// }

// function onCheckboxStatusChange() {
//     if (themeCheckbox.checked === true) {
        
//         if (body.classList.contains(Theme.LIGHT)){
//             body.classList.remove(Theme.LIGHT);
//         }
//         body.classList.add(Theme.DARK);
//         themeCheckbox.setAttribute('checked', true);
//         localStorage.setItem('theme', body.classList);
//     }
        
//     else {
//         if (body.classList.contains(Theme.DARK)){
//             body.classList.remove(Theme.DARK);
//         }
//         body.classList.add(Theme.LIGHT);
//         localStorage.setItem('theme', body.classList);
//     } 
// }