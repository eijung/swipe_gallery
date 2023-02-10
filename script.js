const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');

btnStart.addEventListener("click", () => {
    swiper.autoplay.start();
})

btnStop.addEventListener("click", () => {
    swiper.autoplay.stop();
})