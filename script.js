let current_color = "red";

canv = document.querySelector(".pix_wrapper");
for (let i = 0; i < 50; i++){
    for (let j = 0; j < 30; j++){
        pix = document.createElement("div");
        pix.className = "pixElement";
        pix.style.left = (i * 15) + "px";
        pix.style.top = (j * 15) + "px";
        canv.appendChild(pix);
    }
}

canv.addEventListener('click', function(event){
    pix = event.target;
    pix.style.backgroundColor = current_color;
})

brush = document.querySelector(".brush_wrapper");
brush.addEventListener('click', function(event){
    current_color = "green";
    current_color = event.srcElement.id;

})