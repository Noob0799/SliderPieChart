const slider = document.querySelector('.slider');
const sliderVal = document.querySelector('.slider-val');
const piechart = document.querySelector('.piechart');

slider.addEventListener('input', (e) => {
    sliderVal.innerHTML = e.target.value;
    piechart.style = `--percentage: ${e.target.value}%`;
})