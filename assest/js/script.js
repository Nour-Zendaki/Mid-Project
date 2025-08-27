// side menu on mobile or tablet
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const navLinks = document.querySelector('.navLinks')

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

right.addEventListener('click' , ()=> {
    if (count < sliderElem.length - 3) {
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
