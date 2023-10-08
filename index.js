// script.js
const toggleSwitch = document.querySelector('#darkModeToggle');
const darkmodeText = document.querySelector('.darkmode-switch-text');

toggleSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    darkmodeText.textContent = 'Dark Mode'
  } else {
    document.body.classList.remove('dark-mode');
    darkmodeText.textContent = 'Light Mode'
  }
});
