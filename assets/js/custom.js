const colorChange = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

let intervalChange;

let startColorChange = () => {
    
    if (!intervalChange) {
        intervalChange = setInterval(() => { document.body.style.background = colorChange(); }, 1000);
    }

    
}

const stopColorChange = () => {
    clearInterval(intervalChange);
    intervalChange = null;
}

let start = document.querySelector(".start");
let sto = document.querySelector(".stop");

start.addEventListener("click", startColorChange);
sto.addEventListener("click", stopColorChange);