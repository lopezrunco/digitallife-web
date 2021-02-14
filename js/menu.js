let menuToggle = document.querySelector('.menu-toggle');        // Creamos un variable y dentro traemos la clase .menu-toggle
let menuToggleIcon = document.querySelector('.menu-toggle i');  // Creamos un variable y dentro traemos el i dentro de .menu-toggle
let menu = document.getElementById('menu');                     // Creamos un varaible y dentro traemos el id menu

menuToggle.addEventListener('click', e=>{   
    menu.classList.toggle('show');                              // Con Toogle alternamos anadiendo y quitando la clase .show a menuToggle

    if(menu.classList.contains('show')) {                       // Condicionamos que: si el menu contiene la clase .show que le coloque el icono de cerrar
        menuToggleIcon.setAttribute('class', 'fa fa-times');
    }else{
        menuToggleIcon.setAttribute('class', 'fa fa-bars');     // Si la condicion anterior no se cumple, cambia al menu de icono
    }
});
