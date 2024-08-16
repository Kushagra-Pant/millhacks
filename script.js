function load(){
    starContainer = document.getElementById('star-container')
    count = Math.random() * 200 + 100
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div')
        star.classList.add('star')
    
        size = Math.floor(Math.random() * 0.003) + 0.001
        star.style.width = `${size}vw`
        star.style.height = `${size}vw`
        star.style.border = `${size / 2}px solid white`
    
        star.style.top = `${Math.random() * 97}vh`
        star.style.left = `${Math.random() * 100}vw`
    
        star.style.animationDelay = `${Math.random() * 2}s`
    
        starContainer.appendChild(star)
    }
}
