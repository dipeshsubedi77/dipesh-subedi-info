let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('íd');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='  + id +']').classList.add('active');
            });

        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = 'write all the input fields 😒'

  }
  else{
    emailjs.sendForm('service_1i08n4o','template_t7ol4l7','#contact-form','MtVl9nbS6Aht3PxDZ')
    .then(() =>{
      contactMessage.classList.add('color-blue')
      contactMessage.textContent = 'Message sent 🥵😒🤗'
    })
  }
} 
contactForm.addEventListener('submit', sendEmail)    

