const playvideos = document.querySelectorAll(".playvideo")
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("keydown",e => {
        if(e.keyCode === 13 || e.keyCode === 32){
            window.open(e.target.src)
        }
    })
    img.addEventListener("click",e => {
            window.open(e.target.src)
    })
})



playvideos.forEach(video => {
    
    
    video.play()
    
})
