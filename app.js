
const info = document.getElementById('info');
const phone = document.getElementById('phone');
const cards = document.getElementById('cards');
const tarjetas = document.getElementsByClassName('tarjetas');

window.addEventListener('scroll',function(){
    console.log(window.scrollY)

    if(window.scrollY >= 348){
        //tarjetas[0].classList.remove('mt-5','opacity-0')
        setTimeout(function(){
            tarjetas[0].classList.remove('mt-5','opacity-0')
        },300)
        setTimeout(function(){
            tarjetas[1].classList.remove('mt-5','opacity-0')
        },400)
        setTimeout(function(){
            tarjetas[2].classList.remove('mt-5','opacity-0')
        },500)
        setTimeout(function(){
            tarjetas[3].classList.remove('mt-5','opacity-0')
        },600)
    }
    
    /* if(window.scrollY > 20){
        console.log(info.classList.remove('ms-4','opacity-0'))
    }
    if(window.scrollY > 40){
        console.log(phone.classList.remove('mt-3','opacity-0'))
    } */
}) 

setTimeout(function(){
    info.classList.remove('ms-4','opacity-0')
    phone.classList.remove('mt-3','opacity-0')
},500)