const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show_y');
        } else {
            entry.target.classList.remove('show_y');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden_y');
hiddenElements.forEach((el) => observer.observe(el));