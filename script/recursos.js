let camera = document.getElementById('camera')
let notebook = document.getElementById('notebook')
let cel = document.getElementById('cel')
console.log(camera,notebook,cel)

window.addEventListener('load',()=>{
    animatedAps()

})


function animatedAps(){
    camera.style.top = '0'
    camera.style.left = '0'

    notebook.style.left = '0'
    notebook.style.bottom = '0'

    cel.style.right = '0'
    cel.style.top = '0'

    

}
