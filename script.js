let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
let downloadlink = document.getElementById('downloadlink');
let inputrange = document.querySelectorAll('.slider');

myform.addEventListener('submit', function (e) {
  let urlimage = document.getElementById('onlineurl');
  let urlimageval = urlimage.value;
  if (urlimageval.length) {
    downloadlink.setAttribute('href', urlimageval);
    targetimage.setAttribute('src', urlimageval);

    urlimage.value = '';
  }

  e.preventDefault();
  console.log('done');
  console.log(document.getElementById('downloadlink'));
  console.log(document.getElementById('targetimage'));

});

for (let i = 0; i <= inputrange.length - 1; i++) {
  inputrange[i].addEventListener('input', editimage);
}

function editimage() {
  let gs = document.getElementById('gs');
  let blur = document.getElementById('blur');
  let huerotate = document.getElementById('hue-rotate');
  let sepia = document.getElementById('sepia');
  let resize = document.getElementById('resize');
  let brightness = document.getElementById('brightness');
  let saturation = document.getElementById('saturation');
  let invert = document.getElementById('invert');

  let gsval = gs.value;
  let blurval = blur.value;
  let huerotateval = huerotate.value;
  let sepiaval = sepia.value;
  let resizeval = resize.value;
  let brightnessval = brightness.value;
  let saturationval = saturation.value;
  let invertval = invert.value;

  // console.log("resize value is", resizeval)

  // targetimage.style.filter = 'grayscale(' + gsval + '%) blur(' + blurval + 'px) hue-rotate(' + huerotateval + 'deg) sepia(' + sepiaval + '%)';
  // targetimage.style.filter = `grayscale(${gsval}%) blur(${blurval}px) hue-rotate(${huerotateval}deg) sepia(${sepiaval}%)`;
  // targetimage.style.filter = `
  // grayscale(${gsval}%)
  // blur(${blurval}px)
  // hue-rotate(${huerotateval}deg)
  // sepia(${sepiaval}%)`;

  targetimage.style.filter = `
    grayscale(${gsval}%)
    blur(${blurval}px)
    hue-rotate(${huerotateval}deg)
    sepia(${sepiaval}%)
    brightness(${brightnessval}%)
    saturate(${saturationval}%)
    invert(${invertval}%)
  `;

  targetimage.style.width = `${resizeval}%`;
  targetimage.style.height = `${resizeval}%`;

}

let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset', function () {
  sliderform.reset();
  setTimeout(function () {
    editimage();
  }, 0)
})