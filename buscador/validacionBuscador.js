window.addEventListener("load", function() {

  document.querySelector(".barra-buscadora").onsubmit = function(event) {
    var loQueEscribio = document.querySelector(".buscadorNomal").value

    if (loQueEscribio.length.value > 3) {
      event.preventDefault()
      alert("NO funciona esto")
        // UIkit.notification({message: 'Notification message'});
    }
  }



})
