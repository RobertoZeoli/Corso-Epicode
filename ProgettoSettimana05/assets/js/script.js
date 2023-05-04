const navbar = document.querySelector('header');
const button = document.querySelector('.btnTrans');
window.addEventListener('scroll', function(){
    if (window.scrollY > 500){
        navbar.style.backgroundColor = 'white';
        button.style.backgroundColor= '#1a8917';
    } else{
        navbar.style.backgroundColor= '';
        button.style.backgroundColor= '';
    }
})