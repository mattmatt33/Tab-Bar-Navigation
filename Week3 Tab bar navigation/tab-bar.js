let tab = document.querySelectorAll('.tab p');
let p = document.querySelectorAll('.p');
let background = document.querySelector('body');
let green = document.querySelector('.green');
let red = document.querySelector('.red');
let grey = document.querySelector('.grey');
let blue = document.querySelector('.blue');
let container = document.querySelector('.container');




green.addEventListener('mouseover', function(){
    green.style.backgroundColor = 'green';
    background.style.backgroundColor = 'green';
    tab[0].style.overflow = 'visible'; 
});

green.addEventListener('mouseout', function() {
    green.style.backgroundColor = "";
    background.style.backgroundColor = "";
    tab[0].style.overflow = 'hidden';
});



red.addEventListener('mouseover', function(){
     red.style.backgroundColor = 'red';
     background.style.backgroundColor = 'red';
     tab[1].style.overflow = 'visible'; 
});

red.addEventListener('mouseout', function() {
    red.style.backgroundColor = "";
    background.style.backgroundColor = "";
    tab[1].style.overflow = 'hidden';
});



grey.addEventListener('mouseover', function(){
    grey.style.backgroundColor = 'grey';
    background.style.backgroundColor = 'grey';
    tab[2].style.overflow = 'visible'; 
});

grey.addEventListener('mouseout', function() {
    grey.style.backgroundColor = "";
    background.style.backgroundColor = "";
    tab[2].style.overflow = 'hidden';
});



blue.addEventListener('mouseover', function(){
    blue.style.backgroundColor = 'blue';
    background.style.backgroundColor = 'blue';
    tab[3].style.overflow = 'visible'; 
});

blue.addEventListener('mouseout', function() {
    blue.style.backgroundColor = "";
    background.style.backgroundColor = "";
    tab[3].style.overflow = 'hidden';
});


// on click change background to the same color as the tab being clicked