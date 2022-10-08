const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

const container = document.querySelector('.container')
let actSlideInd = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        actSlideInd++
        if (actSlideInd === slidesCount) {
            actSlideInd = 0
        }
    } else if (direction === 'down') {
        actSlideInd--
        if (actSlideInd < 0) {
            actSlideInd = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${actSlideInd * height}px)`
    sideBar.style.transform = `translateY(${actSlideInd * height}px)`
}