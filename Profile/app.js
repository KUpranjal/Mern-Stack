 const bgColorInput = document.getElementById('bgColor');
    const background = document.getElementById('background');
    const themeToggle = document.getElementById('themeToggle');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const clickSound = document.getElementById('clickSound');

    bgColorInput.addEventListener('input', () => {
      background.style.background = bgColorInput.value;
    });

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeToggle.textContent = document.body.classList.contains('dark-theme')
        ? '☀️ Light Mode'
        : '🌓 Dark Mode';
    });

    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Filters
    const blur = document.getElementById('blur');
    const brightness = document.getElementById('brightness');
    const contrast = document.getElementById('contrast');
    const resetBtn = document.getElementById('resetBtn');

    function applyFilters() {
      background.style.filter = `blur(${blur.value}px) brightness(${brightness.value}%) contrast(${contrast.value}%)`;
    }

    blur.addEventListener('input', applyFilters);
    brightness.addEventListener('input', applyFilters);
    contrast.addEventListener('input', applyFilters);

    resetBtn.addEventListener('click', () => {
      blur.value = 0;
      brightness.value = 100;
      contrast.value = 100;
      applyFilters();
    });