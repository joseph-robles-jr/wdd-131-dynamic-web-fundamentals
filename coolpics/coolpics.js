document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded ensures that it runs after HTML is loaded. I am not sure why this is here but I was having issues and AI siggested it.
  const menuButton = document.getElementById('menuButton'); //selects the menubutton element.
  const navbar = document.getElementById('navbar'); // selects the nav bar

  menuButton.addEventListener('click', function() {  
    navbar.classList.toggle('hide'); //removes the .hide attribute to show the menu
    console.log("Button pressed");
  });
});


