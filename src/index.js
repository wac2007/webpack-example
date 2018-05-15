//index.js

// Importando a imagem e salvando no SVG
import webpackLogo from './assets/webpack.svg';

// Pegando a div de ID = 'app'
const appRoot = document.getElementById('app');

// Criando uma nova imagem
const img = new Image(100, 100);
img.src = webpackLogo;

// Inserindo dentro da div 
appRoot.appendChild(img);