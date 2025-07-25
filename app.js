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

// Animation Contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {
    
    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if(e.target.value !== '') {
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })

}

// Animation GSAP + ScrollMagic

const navBar = document.querySelector('.nav-left');
const title = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-home');
const btnMedias = document.querySelectorAll('.media');
const btnCircleHome = document.querySelector('.circle-btn');

const TL1 = gsap.timeline({paused: true});

TL1
.to(navBar, {left: '0px',ease: Power3.easeOut, duration: 0.6})
.from(title, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1,{opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1,{opacity: 0}, 0.2, '-=0.75')
.from(btnCircleHome, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})

// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector('.presentation');
const titlePres = document.querySelector('.title-pres');
const presLeft = document.querySelector('.pres-left');
const listPres = document.querySelectorAll('.item-list');


const tlPres = new TimelineMax();

tlPres
.from(titlePres, {y: -200, opacity: 0, duration: 0.6})
.from(presLeft, {y: -20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listPres, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPres)
// .addIndicators()
.addTo(controller)

// Animation Portfolio

const portfolioContainer = document.querySelectorAll('.portfolio')
const titlePortfolio = document.querySelectorAll('.title-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
.from(titlePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity:0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio)
// .addIndicators()
.addTo(controller)

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity:0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
// .addIndicators()
.addTo(controller)

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity:0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio3,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
// .addIndicators()
.addTo(controller)

const itemPortfolio4 = document.querySelectorAll('.vague4')

const tlPortfolio4 = new TimelineMax();

tlPortfolio4
.staggerFrom(itemPortfolio4, 1, {opacity:0}, 0.2, '-=0.5')

const scene6 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio4,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio4)
// .addIndicators()
.addTo(controller)

// Animation Range

const sectionAbility = document.querySelector('.section-range');
const titleAbility = document.querySelector('.title-exp');
const allLabel = document.querySelectorAll('.label-skil');
const allPercent = document.querySelectorAll('.number-skill');
const allBars = document.querySelectorAll('.bar-skill');
const allShadowBar = document.querySelectorAll('.bar-grey');

const tlAbility = new TimelineMax();

tlAbility
.from(titleAbility, {opacity:0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allPercent, 0.5, {y: -50, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allShadowBar, 0.5, {y: -50, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allBars, 0.5, {y: -50, opacity: 0}, 0.1, '-=0.5')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionAbility,
    reverse: false
})
.setTween(tlAbility)
.addTo(controller);