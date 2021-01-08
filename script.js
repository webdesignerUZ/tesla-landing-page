const menu = document.getElementById('menu');
const navBar = document.getElementById('navBar');
const exit = document.querySelector('.exit');

menu.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
});

exit.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
})