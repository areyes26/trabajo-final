window.addEventListener("load", function() {


  document.querySelector(".barra-buscadora").onsubmit = function(event) {
    var loQueEscribio = document.querySelector(".buscadorNormal").value
    event.preventDefault()

console.log(loQueEscribio.length);

if (loQueEscribio.length < 3)
{

UIkit.notification({
    message: 'Debes introducir al menos 3 caracteres!',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
});

document.querySelector(".barra-buscadora").onsubmit = function() {}
 // {
 //
 //  UIkit.notification({message: 'Notification message'});
 //  }
}


}
})