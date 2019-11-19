 window.addEventListener("load", function() {


//Paso 1: Leo Storage

var recuperoStorageVer = localStorage.getItem("seriesFavoritosVer");
console.log(recuperoStorageVer);
// Si todavía no tenía gifs favoritos
if (recuperoStorageVer == null) {
  // Creo una lista vacia
  seriesFavoritosVer = [];
} else {
  // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
  seriesFavoritosVer = JSON.parse(recuperoStorageVer);
}



for (var i = 0; i < seriesFavoritosVer.length; i++) {
  if(!seriesFavoritosVer[i].empty) {
    // BUSCAR ESE GIF Y MOSTRARLO
    fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritosVer[i] + "?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
      .then(function(response) {
        return response.json();
      })
      .then(function(serieVer) {
        console.log(serieVer)
        var listaVerMAs = document.querySelector("#listaVer")
        if (serieVer.poster_path == null) {
          listaVerMAs.innerHTML += '<li>'+ '<a href="detalles-serie/detalles-serie.html?id='+ serieVer.id +'">' + '<img src="images/not-found.png">' + '</a>'+ '</li>'

        }
        else{listaVerMAs.innerHTML += '<li>'+ '<a href="detalles-serie/detalles-serie.html?id='+ serieVer.id +'">' + '<img src="https://image.tmdb.org/t/p/w300/' + serieVer.poster_path + '">' + '</a>'+ '</li>'
      }
      })
  }
}
})
