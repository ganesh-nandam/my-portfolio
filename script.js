// Navigation functionality
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-section') === current) {
            button.classList.add('active');
        }
    });
});

// Achievement Card Toggle
const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.classList.contains('verify-btn')) return;
        
        const details = this.querySelector('.achievement-details');
        details.classList.toggle('show');
    });
});

// Form Submit
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    const mailtoLink = `mailto:ganeshnandam06@gmail.com?subject=Portfolio Inquiry&body=Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}`;
    
    window.location.href = mailtoLink;
    
    document.getElementById('submitStatus').innerHTML = '<p class="submit-status">Redirecting to email...</p>';
    
    setTimeout(() => {
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('submitStatus').innerHTML = '';
    }, 1500);
}
