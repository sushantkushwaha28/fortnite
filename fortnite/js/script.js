// let menu=document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr =srrollReveal({
    distance:'40px',
    duration:2000,
    resetL:true
});
sr.reveal('.container h6',{delay:150,origin:'left'});