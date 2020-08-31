var image = document.getElementsByClassName("blurry-load");
const array = ["img/common/1x1Sf.jpg", "img/common/2x1Vf.jpg", "img/common/2x1Hl.jpg", 
"img/common/2x1Vh.jpg", "img/common/1x1Sd.jpg", "img/common/1x1Bh.jpg", 
"img/common/1x1Bg.jpg", "img/common/1x1Bd.jpg", "img/common/1x1Sh.jpg", 
"img/common/2x1Hb.jpg", "img/common/1x1Bc.jpg", "img/common/2x1Va.jpg",
"img/common/1x1Sj.jpg", "img/common/2x1Hc.jpg", "img/common/2x1Vi.jpg", "img/common/2x1Vg.jpg",
"img/common/1x1Bf.jpg", "img/common/1x1Se.jpg", "img/common/1x1Bb.jpg",
"img/common/2x1Hz.jpg"]
for (i=0; i < image.length; i++) {
    let imagenes = array[i]
    let lowImage = image[i]
    let bigImage = document.createElement("img");
    bigImage.onload = function() {
        lowImage.src = this.src;
        lowImage.className = "noblur";
        lowImage.loading = "lazy";
};
setTimeout(function(){
    bigImage.src = imagenes;
}, 3500);
}



