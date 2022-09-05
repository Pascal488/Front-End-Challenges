const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.container5');
// A function that alllow a humbuger to be open and  to be closed
function openMenu(){

    if(menu.classList.contains('custom')){
        menu.classList.remove('custom');
        menuContainer.classList.remove('menu-active');
        document.body.style.overflow = "auto";
        document.body.style.maxHeight = "auto"
       
    
    }else{
        menu.classList.add('custom') // Adding a class into a menu class
        menuContainer.classList.add('menu-active') // Adding a styled class 
        document.body.style.overflowY = "hidden"; // Hide overflow when a humbuger is onclick
        document.body.style.maxHeight = "100vh" 
        document.body.style.maxWidth = "100vw"

     
   
    }
}