// PAGE LOADER (optional)
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) loader.classList.add('fade');
});

// Core DOM elements
const exploreBtn = document.getElementById('explore-btn');
const navButtons = document.getElementById('nav-buttons');
const toc = document.getElementById('toc');

// ✅ If Back to Home used (#toc in URL)
if (window.location.hash === "#toc") {
  setTimeout(() => {
    navButtons.classList.add('active');
    toc.classList.add('visible');
  }, 20);
  toc.scrollIntoView({ behavior: 'smooth' });

  // ✅ Remove the hash so a fresh reload starts at the header
  history.replaceState(null, null, window.location.pathname);
}

// ✅ Explore button click
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    navButtons.classList.add('active');
    toc.classList.add('visible');
    navButtons.scrollIntoView({ behavior: 'smooth' });
  });
}

// ✅ Smooth page transitions
document.querySelectorAll('.page-link, .nav-card').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.remove('fade');
    setTimeout(() => { window.location.href = href; }, 500);
  });
});

// ✅ Section fade-in on scroll
window.addEventListener('scroll', () => {
  const about = document.getElementById('about');
  if (toc.getBoundingClientRect().top < window.innerHeight - 100) {
    toc.classList.add('visible');
  }
  if (about && about.getBoundingClientRect().top < window.innerHeight - 100) {
    about.classList.add('visible');
  }
});
