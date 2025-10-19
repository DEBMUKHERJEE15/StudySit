document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('opacity-0'); // Initial hidden
    observer.observe(el);
  });
});
