import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const button = document.querySelector('#hamburger');
const drawer = document.querySelector('#drawer');
const content = document.querySelector('#main');

const app = new App({
  button,
  drawer,
  content,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('#main').focus();
  }
});
