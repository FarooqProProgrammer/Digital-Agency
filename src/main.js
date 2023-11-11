const { default: Header } = require("./components/Header");
const { default: Hero } = require("./components/Hero");
const { default: Services } = require("./components/Services");

require('./dist/output.css')

const root = document.getElementById('app');



function render() {
    root.innerHTML = '';
    root.appendChild(Header());
    root.appendChild(Hero());
    root.appendChild(Services());
    
}

render();