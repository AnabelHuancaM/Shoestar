const testimonial = [
    {
        name: "Jacklyn U.", 
        fotoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Really good. Great job, I will definitely be ordering again! Just what I was looking for."
    },

    {
        name: "Gabbi E", 
        fotoUrl: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "You won't regret it."
    },

    {
        name: "Dominik U.", 
        fotoUrl: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "It's really wonderful. Shoes did exactly what you said it does. Without shoes, we would have gone bankrupt by now.."
    },

    {
        name: "James L.", 
        fotoUrl: "https://images.unsplash.com/photo-1628890917334-bc50dcb5cc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Really good. You've saved our business! I couldn't have asked for more than this."
    }

];

const imgElm = document.querySelector(".test-img")
const textElm = document.querySelector(".text")
const usernmElm = document.querySelector(".text-name")

let idx = 0;

updateTestim()

function updateTestim() {
    const{name, fotoUrl, text} = testimonial[idx]
    imgElm.src = fotoUrl
    textElm.innerText =  text
    usernmElm.innerText = name
    idx++

    if (idx === testimonial.length) {
        idx = 0; //regrese a 0
    }
    setTimeout(()=>{
        updateTestim()
    }, 1300) //tempo
}