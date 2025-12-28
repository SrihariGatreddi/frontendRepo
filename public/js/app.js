// Simple client-side JS for the frontend app
document.addEventListener('DOMContentLoaded', function () {
  const h1 = document.querySelector('h1');
  console.log('Frontend app loaded');

  if (h1) {
    // update heading with current time
    const now = new Date();
    h1.textContent = `Hello from Frontend — ${now.toLocaleTimeString()}`;

    // add a small click interaction
    h1.style.cursor = 'pointer';
    h1.addEventListener('click', () => {
      h1.textContent = 'You clicked the heading!';
      h1.style.transition = 'transform 160ms ease';
      h1.style.transform = 'scale(1.04)';
      setTimeout(() => (h1.style.transform = ''), 220);
    });
  }
});
