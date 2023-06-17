var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".command");

var options = {
    rootMargin: "-50% 0px -50% 0px" // Define a margem de interseção para ativar a classe
};

var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            var targetId = entry.target.getAttribute("id");
            console.log(targetId)
            var targetLink = document.querySelector('a[href="#' + targetId + '"] .command ');
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