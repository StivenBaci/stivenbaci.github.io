// ALVEX main.js

// --- Mobile navigation toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('active'))
  );
}

// --- Nav logo reveal on scroll (home page only) ---
// Only runs when the header carries the .nav-hero class, which is set solely
// on the home page. Other pages have no such header, so nothing happens there.
const siteHeader = document.getElementById('siteHeader');
if (siteHeader && siteHeader.classList.contains('nav-hero')) {
  const onScroll = () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// --- Hero video enlarge / shrink ---
const heroVideo = document.getElementById('heroVideo');
const videoBackdrop = document.getElementById('videoBackdrop');
if (heroVideo && videoBackdrop) {
  const closeVideo = () => {
    heroVideo.classList.remove('enlarged');
    videoBackdrop.classList.remove('active');
  };
  // Click the video to enlarge it. Once enlarged, clicks land on the native
  // controls instead; closing happens via the backdrop or the Escape key.
  heroVideo.addEventListener('click', () => {
    if (!heroVideo.classList.contains('enlarged')) {
      heroVideo.classList.add('enlarged');
      videoBackdrop.classList.add('active');
    }
  });
  videoBackdrop.addEventListener('click', closeVideo);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeVideo();
  });
}
