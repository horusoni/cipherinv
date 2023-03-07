//loop banner
let banners = document.querySelectorAll(' .banner')
let checknav = document.getElementById('checknav')
let navbar = document.getElementById('navbar')
let hamburguer = document.getElementById('hamburguer')
let l1 = document.querySelector('.l1')
let l2 = document.querySelector('.l2')
let l3 = document.querySelector('.l3')
let list = document.querySelectorAll('.list')

let tempo = 4000

function init(){
    let i = 0
    setInterval(()=>{
        banners[i].classList.remove('bannerwin')
        i ++

        if(i >= banners.length){
            i = 0
            
        }
        banners[i].classList.add('bannerwin')
    },tempo)
    
}
window.addEventListener('load',()=>{
    init()
})

//navbar

checknav.addEventListener('click',()=>{
    if(checknav.checked){
        pushbar()
    }else{
        returbar()
    }
})


function pushbar(){
    
    
    navbar.style.left = '0px'

    hamburguer.style.transition='1s'
    hamburguer.style.left='30vw'

    l1.style.top = "17px"
    l1.style.transform = "rotate(225deg)"

    l2.style.transform = "rotate(225deg)"

    l3.style.top = "17px"
    l3.style.transform = "rotate(-225deg)"

    let sc = 0
    for(let i = 0; i <= list.length; i++){
        list[i].style.transition = `1.${sc}s`
        list[i].style.marginLeft = '0'

        sc +=3
    }

}
function returbar(){
    navbar.style.left = '-60%'

    hamburguer.style.transition='1s'
    hamburguer.style.left='10px'

    l1.style.top = "7px"
    l1.style.transform = "rotate(0deg)"

    
    l2.style.transform = "rotate(0deg)"
    

    l3.style.top = "27px"
    l3.style.transform = "rotate(0deg)"


    for(let i = 0; i <= list.length; i++){
        list[i].style.marginLeft = "-400px"

    }
}