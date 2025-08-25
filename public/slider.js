let items = document.querySelectorAll('.slider .list .item');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

// Change slide on any tap/click on the slider
let slider = document.querySelector('.slider');
slider.addEventListener('click', () => {
    active = active + 1;
    if (active > lastPosition) active = firstPosition;
    setSlider();
});

const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if (oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
}
setSlider();

// set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}
setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})