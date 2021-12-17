const menuMobile = document.querySelector('.mobile-desktop')
const addMenuMobile = document.querySelector('.ativar-mobile > .fa-bars')
.addEventListener('click', ()=>{
    menuMobile.classList.toggle('view')
})

//capturando inputs
document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    const email = document.querySelector('input[type=email]')
    const nome = document.querySelector('input[type=text]')
    const senha = document.querySelector('input[type=password]')

    console.log(email.value);
})

// slider
lastIndex = 0
const images = document.querySelectorAll('.img > img')
images.forEach((item,index)=>{
    const bullets = document.querySelectorAll('.pointer div')[index]
    .addEventListener('click',()=>{
        const lastImage = document.querySelectorAll('.img > img')[lastIndex]
        const actualImage = document.querySelectorAll('.img > img')[index]

        //resetar bullets
        document.querySelectorAll('.pointer div')[lastIndex]
        .classList.remove('select')
        document.querySelectorAll('.pointer div')[index]
        .classList.add('select')

        lastImage.style.opacity = 0
        actualImage.style.opacity = 1

        lastIndex = index
    })
})