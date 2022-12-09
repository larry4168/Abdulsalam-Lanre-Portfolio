const header = document.querySelector('header');
const word_con = document.querySelector(".about-pg-1");
const menubar = document.querySelector(".menu-bar");
const close = document.querySelector(".close-bar");
const navlist = document.querySelector(".navbar");

const scroll = () => {
  window.addEventListener('scroll', () => {
    if (!open && navlist.classList != 'nav-active') {
      header.classList.toggle("sticky", window.scrollY > 0);
    } 
    else if (navlist.classList == 'nav-active' && open) {

    }
    else {
      header.classList.add("sticky", window.scrollY > 0);
    }
  })
};

scroll();

const open = menubar.addEventListener("click", () => {
  close.style.display = "block";
  menubar.style.display = "none";
  display();
});

function display() {
  if (!window.screenY > 0) {
    header.classList.add("sticky", window.scrollY > 0);
    navlist.classList.add("nav-active");
  } else {
    header.classList.add("sticky", window.scrollY > 0);
    navlist.classList.add("nav-active");
  }
}

const closer = close.addEventListener("click", () => {
  close.style.display = "none";
  menubar.style.display = "block";
  slider();
});

const __close = () => {
  close.style.display = "none";
  menubar.style.display = "block";
  slider();
}

function slider() {
  scroll();
  if (window.scrollY == 0) {
    header.classList.remove("sticky");
    navlist.classList.remove("nav-active");
  } 
  else if (window.scrollY > 0) {
    navlist.classList.remove("nav-active");
  }
}

const txt = "I'm a young Developer, with demonstrated range of abilities in Html, CSS and JavaScript, with some other high level programming languages. My job is to compose clean code and style the front-end components that meet the necessities and satisfy our client stories. Also, which I guarantee the clients interface/website is completely responsive on users devices. Also, I know about other advanced programming languages, for example, Tailwind CSS, ES6, React Js.";
const speed = 60;
let i = 0;

function typeWriter() {
  if (i < txt.length) {
    word_con.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);

const more_abme = () => {
  const rm_btn = document.querySelector('.rm');
  const rl_btn = document.querySelector('.rl');
  const more_ab = document.querySelector('.more-ab');

  rm_btn.addEventListener("click", () => {
    more_ab.style.display = "block";
    rm_btn.style.display = "none"
    rl_btn.style.display = "flex"
  });
  
  rl_btn.addEventListener("click", () => {
    more_ab.style.display = "none";
    rm_btn.style.display = "flex"
    rl_btn.style.display = "none"
  });
}

more_abme();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};


const fname = document.getElementById("fname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const send = document.querySelector(".form");

send.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked")

  let body = (`
    <div>
      <h3>${`subject.value`}</h3>
      <b>Full Name: </b>${`fname.value`}
      <b>Email: </b>${`email.value`}
      <b>Body: </b>${`message.value`}
    </div>
  `);

  
  Email.send({
    SecureToken: "3181e68a-d5fa-4be9-982f-5aaf11880475",
    To: "abdulsalamlanre6@gmail.com",
    From: "abdulsalamlanre6@gmail.com",
    Subject: subject.value,
    Body: "Testing my contact messaging, if its working." + body,
  }).then((message) => alert(message));

})
