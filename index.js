const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 200)
})

const word_con = document.querySelector('.about-pg');

const txt = "I'm a young Front End Developer, with demonstrated range of abilities in Html, CSS and JavaScript, with some other high level programming languages. My job is to compose clean code and style the front-end components that meet the necessities and satisfy our client stories. Also, which I guarantee the clients interface/website is completely responsive on users devices. Also, I know about other advanced programming languages, for example, Tailwind CSS, ES6, React Js and Python.";
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