var open = document.getElementById('open');
var close = document.getElementById('close');
var  mblMenu = document.getElementById('mbl-menu');

open.style.display = "none"

open.addEventListener("click" , function(){
    mblMenu.style.top = "0%"
    close.style.display = "block"
    open.style.display = "none"


})

close.addEventListener("click" , function(){
    mblMenu.style.top = "-100%"
    open.style.display = "block"
    close.style.display = "none"
})