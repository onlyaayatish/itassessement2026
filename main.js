/* =============================================
   main.js — Interactivity for the fan site
============================================= */

/* Navigate to different pages */
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Unhighlight all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Show the selected page
  document.getElementById(pageId).classList.add('active');

  // Highlight the matching nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('onclick').includes(pageId)) {
      link.classList.add('active');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Animate skill bars if on characters page
  if (pageId === 'characters') {
    animateSkillBars();
  }
}

/* Animate skill bars - shows character power level */
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');

  bars.forEach(bar => {
    // Get the target width from data-width attribute
    const targetWidth = bar.getAttribute('data-width');

    // Animate after a short delay
    setTimeout(() => {
      bar.style.width = targetWidth + '%';
    }, 100);
  });
}

/* Handle contact form submission */
function handleForm(event) {
  // Stop page reload
  event.preventDefault();

  // Get form values
  const name = document.getElementById('c-name').value;
  const email = document.getElementById('c-email').value;
  const subject = document.getElementById('c-subject').value;
  const message = document.getElementById('c-message').value;

  // Validate - check nothing is empty
  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Log the message to console
  console.log('Message sent:', { name, email, subject, message });

  // Show success message
  document.getElementById('formSuccess').style.display = 'block';

  // Clear the form
  event.target.reset();
}

/* Start on home page when page loads */
showPage('home');