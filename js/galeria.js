const imgContainerEl = document.querySelector(".img-container")
const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")

let x = 0
let timer

prevEl.addEventListener("click", ()=>{
    x = x + 45;
    clearTimeout(timer)
    updateGalery()
})

nextEl.addEventListener("click", ()=>{
    x = x - 45;
    clearTimeout(timer)
    updateGalery()
})

function updateGalery() {
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x - 40
        updateGalery()
    }, 1000);
}
updateGalery() 