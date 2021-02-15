let menuToggle = document.querySelector('.menu-toggle');        // Create a variable and capture .menu-toogle
let menuToggleIcon = document.querySelector('.menu-toggle i');  // Create a variable and capture the "i" tag inside .menu-toggle
let menu = document.getElementById('menu');                     // Create a variable and capture #menu

menuToggle.addEventListener('click', e=>{   
    menu.classList.toggle('show');                              // Toogle between add and quit the .show class to .menuToggle

    if(menu.classList.contains('show')) {                       // If the menu have the .show class, put the close icon
        menuToggleIcon.setAttribute('class', 'fa fa-times');
    }else{
        menuToggleIcon.setAttribute('class', 'fa fa-bars');     // If the previosus condition doesnt applicate, change to the menu icon
    }
});
