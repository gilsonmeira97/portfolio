// Active item effect in menu

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".command");

const options = {
    rootMargin: "-50% 0px -50% 0px" // Define a margem de interseção para atilet a classe
};

let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            let targetId = entry.target.getAttribute("id");
            let targetLink = document.querySelector('a[href="#' + targetId + '"] .command ');
            navLinks.forEach(function (link) {
                if(link.classList.contains("active")) {
                    link.classList.remove("active");
                    link.textContent = " run"
                }
            });
            targetLink.textContent = " running"
            targetLink.classList.add("active");
        }
    });
}, options);

sections.forEach(function (section) {
    observer.observe(section);
});


// Smooth scroll effect

const menuItems = document.querySelectorAll('.nav-menu a');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  targetSection.scrollIntoView({ behavior: 'smooth' });
}