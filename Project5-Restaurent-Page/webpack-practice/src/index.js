import { home } from "./home.js";
import {menu} from './Menu.js'
import {about} from './About.js'
import './style.css';
home();
const navHome = document.querySelector("#home-button");
const navAbout = document.querySelector("#about-button");
const navMenu = document.querySelector("#menu-button");
navHome.addEventListener("click", ()=>{
    home();
})
navAbout.addEventListener("click", ()=>{
    about();
})
navMenu.addEventListener("click", ()=>{
    menu();
})