window.addEventListener("load", function() {


  document.querySelector(".barra-buscadora").onsubmit = function(event) {
    var loQueEscribio = document.querySelector(".buscadorNomal").value
    event.preventDefault()

console.log(loQueEscribio.length);

if (loQueEscribio.length < 3)
{

  UIkit.notification ({
      message : 'Inserte Al Menos 3 Caracteres',
      status  : 'primary',
      timeout : 5000,
      pos     : 'top-center'
  });
//
document.querySelector(".barra-buscadora").onsubmit = function() {}
//  // {
//  //
//  //  UIkit.notification({message: 'Notification message'});
//  //  }
// }


}
}
})
