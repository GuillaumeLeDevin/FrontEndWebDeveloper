const btnMenu = document.querySelector('.circle-btn-menu');
const nav = document.querySelector('.nav-left');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const line = document.querySelector('.container-line');

btnMenu.addEventListener('click', () => {

    line.classList.toggle('active');
    nav.classList.toggle('menu-visible');

})

if(window.matchMedia('(max-width: 1300px)')) {

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            line.classList.toggle('active');
            nav.classList.toggle('menu-visible');
        })
    })

}

//Writter Animation

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 15
})

typewriter
.pauseFor(700)
.changeDelay(15)
.typeString('Hi, I\'m Guillaume Le Devin')
.pauseFor(300)
.typeString('<strong>, Web Developer</strong>!')
.pauseFor(1000)
.deleteChars(14)
.typeString('<span style="color: #24ae60;">CSS</span> <strong>Developer</strong>!')
.pauseFor(1000)
.deleteChars(14)
.typeString('<span style="color: #EA39ff;">HTML</span> <strong>Developer</strong>!')
.pauseFor(1000)
.deleteChars(15)
.typeString('<span style="color: #ff6910;">Javascript</span> <strong>Developer</strong>!')
.pauseFor(1000)
.deleteChars(21)
.typeString('<span style="color: brown;">React</span> <strong>Developer</strong>!')
.pauseFor(1000)
.deleteChars(16)
.typeString('<span style="color: midnightblue;">Front-End</span> <strong>Developer</strong>!')
.pauseFor(1800)
.start()