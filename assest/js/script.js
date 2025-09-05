// side menu on mobile or tablet
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const navLinks = document.querySelector('.navLinks')

if (openMenu && closeMenu && navLinks) {
    window.addEventListener('load' , () => {
        openMenu.addEventListener('click' , ()=> {
        openMenu.classList.toggle('active')
        closeMenu.classList.toggle('active')
        navLinks.classList.toggle('active')
    })
    
    closeMenu.addEventListener('click' , ()=> {
        navLinks.classList.remove('active')
        closeMenu.classList.remove('active')
        openMenu.classList.remove('active')
    })
    })
}

// slider for moving between pages
const slider = document.querySelector('.slider')
const sliderElem = document.querySelectorAll('.slides')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const itemWidth = 48;
const gap = 12;
const step = itemWidth + gap;
let count = 0

function updateSlider() {
    slider.style.transform = `translateX(-${count*step}px)`
}

if (slider && left && right && sliderElem.length) {
    
    right.addEventListener('click' , ()=> {
        const max = Math.max(0, sliderElem.length - 3)
        if (count < max) {
            count++
            updateSlider()
        }
    })
    left.addEventListener("click" , ()=> {
        if (count > 0) {
            count--
            updateSlider()
        }
    })
}


// page name is active when we are in the same page

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.list[href]');
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === '/') {
        currentPage = 'index.html'
    }
    links.forEach(link => {
        if(link.getAttribute("href").replace("./", "") === currentPage) {
            link.classList.add("showpage")
        }
    })
})

// list page in the navbar

const listTitle = document.querySelector('.listTitle')
const listPageNav = document.querySelector('.anypage')
listTitle.addEventListener('click' , () => {
    listPageNav.classList.toggle('show')
    const arrowdown = document.querySelector('.arrowdown')
    arrowdown.classList.toggle('rotate')
})

// search icon in nav
const searchIcon = document.querySelector('.searchingIcon')
const navSearch = document.querySelector('.navSearch')

searchIcon.addEventListener('click' , () => {
    searchIcon.style.display = "none"
    navSearch.classList.toggle('searchrow')
})