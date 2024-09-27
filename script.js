document.querySelector('.search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Recherche de voitures... Cette fonctionnalité serait implémentée dans une version réelle du site.');
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const closeButtons = document.querySelectorAll('.close-section');
    const mainContent = document.querySelector('main');


    const faqQuestions = document.querySelectorAll('.faq-question');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.id.replace('-link', '-details');
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'block';
                mainContent.childNodes.forEach(child => {
                    if (child.nodeType === 1 && child.id !== sectionId) {
                        child.style.display = 'none';
                    }
                });
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.section-container').style.display = 'none';
            mainContent.childNodes.forEach(child => {
                if (child.nodeType === 1 && !child.id.endsWith('-details')) {
                    child.style.display = '';
                }
            });
        });
    });

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});