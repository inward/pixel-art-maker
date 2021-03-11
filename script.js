let current_color = "red";

canv = document.querySelector(".pix_wrapper");
brush = document.querySelector(".brush_wrapper");
const create_pixfield = () => {
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 30; j++) {
            pix = document.createElement("div");
            pix.className = "pixElement";
            pix.style.left = (i * 15) + "px";
            pix.style.top = (j * 15) + "px";
            canv.appendChild(pix);
        }
    }
}

const create_paints = () =>{
    let colors_ar = ['blue', 'green', 'red', 'purple', 'orange', 'black', 'white']
    for (let i = 0; i < colors_ar.length; i++){
        colorBrush = document.createElement("div");
        colorBrush.className = "color_brush";
        colorBrush.id = colors_ar[i];
        colorBrush.style.backgroundColor = colors_ar[i];
        brush.appendChild(colorBrush);
    }
    color_sample = document.createElement("div");
    color_sample.id = "color_sample";
    color_sample.style.backgroundColor = current_color;
    brush.appendChild(color_sample);
}

canv.addEventListener('click', function (event) {
    pix = event.target;
    pix.style.backgroundColor = current_color;
})

brush.addEventListener('click', function (event) {
    current_color = event.srcElement.id;
    color_sample = document.querySelector("#color_sample");
    color_attribute = "background-color: " + current_color;
    color_sample.setAttribute("style", color_attribute);
})


create_pixfield();
create_paints();