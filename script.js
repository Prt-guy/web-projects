const btn = document.querySelector(".order");
const btn2 = document.querySelector(".close");
const btn3 = document.querySelector(".btn");
const cont1 = document.querySelector(".cont1");
const cont = document.querySelector(".cont");
const body = document.querySelector("body");
const inp = document.querySelector("input");
const wrapper = document.querySelector(".wrapper");
const loglink = document.querySelector(".Loglink");
const reglink = document.querySelector(".reglink");


reglink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loglink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btn.addEventListener("click", () => {
    cont1.style.display = "none";
    cont.style.display = "flex";

})


btn2.addEventListener("click", () => {
    cont1.style.display = "block";
    cont.style.display = "none";

})


btn3.addEventListener("click", () => {
    let value = inp.value;
    if(value.length > 0){
    cont1.style.display = "block";
    cont.style.display = "none";
    }
})

