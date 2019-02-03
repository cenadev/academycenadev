var btnliga = document.querySelector('button.liga');
var btnDesliga = document.querySelector('button.desliga');



btnliga.addEventListener('click' , function(){
    document.getElementById('lampada').src = "./img/lamp_on.jpg";
}) 

btnDesliga.addEventListener('click' , function(){
    document.getElementById('lampada').src = "./img/lamp_off.jpg";
})    

