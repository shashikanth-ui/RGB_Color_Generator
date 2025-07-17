let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let rgb = document.querySelector(".rgb");
let copy = document.querySelector(".copy");
let colorchanger = document.querySelector(".contain");

red.addEventListener("input",()=>{
    colorchanger.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    rgb.innerText = `rgb(${red.value},${green.value},${blue.value})`;
})


green.addEventListener("input",()=>{
    colorchanger.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    rgb.innerText = `rgb(${red.value},${green.value},${blue.value})`;
})


blue.addEventListener("input",()=>{
    colorchanger.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    rgb.innerText = `rgb(${red.value},${green.value},${blue.value})`;
})

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(`(${red.value},${green.value},${blue.value})`);
    copy.innerText = "copied";
    alert("Value is copied to Clipboard");
    setTimeout(()=>{
        copy.innerText = "copy";
    },2000)
})
