const box = document.getElementById('lala');
const gr = document.getElementById('grow')
const sp = document.getElementById('span');
const score = document.getElementById('spanScore');
console.log(box)

let scro = 0;

grow.addEventListener('mousemove' , (event)=>{
    box.style.left = `${event.clientX - 115}px`;
    box.style.top = `${event.clientY - 22}px`;
    sp.innerHTML = box.style.left + ' ' +  box.style.top;
})


function Score (event) {
    scro = scro + 1;
    scro.innerHTML = scro;
}

