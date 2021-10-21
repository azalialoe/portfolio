const projectOne = document.querySelector('.projectOne');
const projectTwo = document.querySelector('.projectTwo');
const projectThree = document.querySelector('.projectThree');
const projectFour = document.querySelector('.projectFour');

const overlayOne = document.querySelector('.overlayOne')
const overlayTwo = document.querySelector('.overlayTwo')
const overlayThree = document.querySelector('.overlayThree')
const overlayFour = document.querySelector('.overlayFour')

projectOne.addEventListener('click', () => {
    overlayOne.classList.toggle('active')
})

projectTwo.addEventListener('click', () => {
    overlayTwo.classList.toggle('active')
})

projectThree.addEventListener('click', () => {
    overlayThree.classList.toggle('active')
})

projectFour.addEventListener('click', () => {
    overlayFour.classList.toggle('active')
})



