// Nav
const menuIcon = document.querySelector("nav span")
const close = document.querySelector(".nav-menu span")
const navbar = document.querySelector("nav")
const navList = close.parentElement
const link = navList.querySelectorAll("ul li a")

// Services
const card = document.querySelectorAll(".service .cards .card")
card.forEach(e => {
    e.addEventListener("mouseover", function(){
        e.classList.add("hover")
    })

    e.addEventListener("mouseout", function(){
        e.classList.remove("hover")
    })
});


// When menu icon clicked
menuIcon.addEventListener("click", function(){
    navList.classList.toggle("display-none")
})

// When close icon clicked
close.addEventListener("click", () => {
    navList.classList.toggle("display-none")
})

// When page on scroll
window.addEventListener("scroll", function(){
    if(window.pageYOffset > navbar.offsetTop){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

// When link on nav list clicked
link.forEach(e => {
    e.addEventListener("click", function(){
        navList.classList.toggle("display-none")
    })
});
