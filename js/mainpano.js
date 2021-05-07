


const panoImage = document.querySelector('.pano-image');
const miamiPano = '../360/3601.jpg'

const panorama = new PANOLENS.ImagePanorama(miamiPano);
const viewer = new PANOLENS.Viewer();

viewer.add( panorama );



