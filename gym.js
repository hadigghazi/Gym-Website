const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll(".nav__link") 

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

const calculateForm = document.getElementById("calculate-form"),
      calculateCm = document.getElementById("calculate-cm"),
      calculateKg = document.getElementById("calculate-kg"),
      calculateMessage = document.getElementById("calculate-message")

const calculateBmi = (e) => {
    e.preventDefault()
    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        calculateMessage.textContent = "Fill Height And Weight 👀"
        setTimeout(() =>{
            calculateMessage.textContent = ''
        },3000)
    }else{
        const cm = calculateCm.value / 100,
        kg = calculateKg.value,
        bmi = Math.round(kg/ (cm*cm))
        if(bmi < 18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 🙁`
        }else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
        }
        else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 🙁`
        }
        calculateCm.value = ''
        calculateKg.value = ''
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000) 
    }
}

calculateForm.addEventListener('submit', calculateBmi)

const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message'),
contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
     e.preventDefault()

     if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'You must enter your email ☝'
         
        setTimeout(() => {
            contactMessage.textContent = ''
         }, 3000)
    } else{
          emailjs.sendForm('service_j3rs8tz','template_h4x2bxr','#contact-form','J07HdUpGhRLMXzyOa')
          .then(() =>{
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully 💪'
            setTimeout(() => {
                contactMessage.textContent = ''
             }, 3000)
          }, (error) =>{
            alert('OOPS! SOMETHING WENT WRONG...', error)
          })
          contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)

AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})
