//i Iused Copilot to help me with this code but it is not copy and pasted.

// Select the theme selector element
const themeSelector = document.getElementById('themeSelector');

// Add an event listener for the change event
themeSelector.addEventListener('change', changeTheme);

// Function to change the theme
function changeTheme() {
  const selectedTheme = themeSelector.value;
  const body = document.body;
  const logo = document.getElementById('logo');

  if (selectedTheme === 'dark') {
    body.classList.add('dark');

    logo.src = 'byui-logo_white.png'; // This is the dark mode logo
  
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; // this is the light mode logo with the BLUE text
  }
}