// Nav smooth scroll with fixed-header offset
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.querySelector('nav').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Ticker pause on hover
const ticker = document.querySelector('.ticker');
const tickerWrap = document.querySelector('.ticker-wrap');
tickerWrap.addEventListener('mouseenter', () => ticker.style.animationPlayState = 'paused');
tickerWrap.addEventListener('mouseleave', () => ticker.style.animationPlayState = 'running');

// Form
function handleSubmit() {
  const input = document.getElementById('email');
  const success = document.getElementById('form-success');
  const note = document.querySelector('.form-note');
  if (!input.value || !input.value.includes('@')) {
    input.style.borderColor = 'var(--accent2)';
    setTimeout(() => input.style.borderColor = '', 1200);
    return;
  }
  input.disabled = true;
  document.querySelector('.form-row button').disabled = true;
  note.style.display = 'none';
  success.style.display = 'block';
}
