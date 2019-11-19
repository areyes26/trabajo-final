window.addEventListener("load", function() {

  document.querySelector("barra-buscadora").onsubmit = function(event) {
    var loQueEscribio = document.querySelector("form input").value

    if (ESO TIENE MENOS DE 3 CARACTERES) {
      event.preventDefault()

        UIkit.notification({message: 'Notification message'});
    }
  }



})
