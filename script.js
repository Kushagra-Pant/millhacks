function load(){
    starContainer = document.getElementById('star-container')
    count = Math.random() * 200 + 100
    
    for (let i = 0; i < count; i++) {
        // Create a star element
        const star = document.createElement('div')
        star.classList.add('star')
    
        // Random size between 1px and 4px
        size = Math.floor(Math.random() * 3) + 1
        star.style.width = `${size}px`
        star.style.height = `${size}px`
        star.style.border = `${size / 2}px solid white` // Adjust border to create 4-sided stars
    
        // Random position within the container
        star.style.top = `${Math.random() * 100}vh`
        star.style.left = `${Math.random() * 100}vw`
    
        // Random animation delay for twinkling effect
        star.style.animationDelay = `${Math.random() * 2}s`
    
        // Append star to the container
        starContainer.appendChild(star)
    }
}
