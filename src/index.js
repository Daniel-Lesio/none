import AOS from 'aos';
// ..
AOS.init();
import './styles/main.scss'

import jump from 'jump.js'
import { sectionsViewDetect } from  './scripts/IO'

const heroBtn = document.querySelector(".hero-btn")
heroBtn.addEventListener('click',()=> jump('.grid-2'))

sectionsViewDetect()
const arrowup = document.querySelector(".toTop")
arrowup.addEventListener('click',()=>jump('.goto'))

window.addEventListener("load",()=>{
    let loader = document.querySelector(".preloader");
    setTimeout(() => {
        loader.classList.add("dn")
    }, 0);
})

const navLinks = document.querySelectorAll(".navlinks")

navLinks.forEach(link=>{
    console.log("s")
})