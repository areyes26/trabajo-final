window.onload = function() {

  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesFavoritos");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritos = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritos = JSON.parse(recuperoStorage);
  }

  var datos = new URLSearchParams(location.search);
  var idGif = datos.get("idGif");

  if (seriesFavoritos.includes(idGif)) {
    document.querySelector("buttonFav").innerHTML = "QUITAR DE FAVORITOS";
  }



  fetch("https://api.giphy.com/v1/gifs/" + idGif + "?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU")
    .then(function(response) {
      return response.json();
    })
    .then(function(gif) {

    })

    document.querySelector(".buttonFav").onclick = function() {


      //Paso 2: Modificar la informacion
      // Si el gif ya era favorito
      if (seriesFavoritos.includes(idGif)) {
        // Lo quito
        var index = seriesFavoritos.indexOf(idGif);
        seriesFavoritos.splice(index, 1);
        document.querySelector("buttonFav").innerHTML = "AGREGAR FAVORITO";
      } else {
        //Lo agrego
        seriesFavoritos.push(idGif);
        document.querySelector("buttonFav").innerHTML = "QUITAR DE FAVORITOS";
      }


      //Paso 3: Escribir en storage
      var infoParaStorage = JSON.stringify(seriesFavoritos);
      localStorage.setItem("seriesFavoritos", infoParaStorage);
      console.log(localStorage);
    }
}
