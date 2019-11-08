window.onload = function(){

//SERIES POPULARES
fetch("https://api.themoviedb.org/3/tv/popular?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&page=1")
  .then(function(response) {
      return response.json();
  })
  .then(function(resultadoFinal) {
      var listado = document.querySelector("#listaPopular");
      //console.log(resultadoFinal.results);

      /*
      for(var i = 0; i < resultadoFinal.results.length; i++) {
          console.log(resultadoFinal.results[i].original_name);
      }
      */
     for(var i = 0; i < resultadoFinal.results.length; i++) {
       console.log(resultadoFinal.results[i]);
         listado.innerHTML += '<li>'+ '<a href="../detalles-serie/detalles-serie.html">' + '<img src="https://image.tmdb.org/t/p/w300/' + resultadoFinal.results[i].poster_path + '">' + '</a>'+ '</li>'

     }
  })

  //SERIES AL AIRE
  fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&page=1")
    .then(function(response) {
        return response.json();
    })
    .then(function(resultadoFinalAire) {
        var listadoAire = document.querySelector("#listaAire");
        //console.log(resultadoFinal.results);

        /*
        for(var i = 0; i < resultadoFinal.results.length; i++) {
            console.log(resultadoFinal.results[i].original_name);
        }
        */
       for(var i = 0; i < resultadoFinalAire.results.length; i++) {
         console.log(resultadoFinalAire.results[i]);
           listadoAire.innerHTML += '<li>'+ '<a href="../detalles-serie/detalles-serie.html">' + '<img src="https://image.tmdb.org/t/p/w300/' + resultadoFinalAire.results[i].poster_path + '">' + '</a>'+ '</li>'

       }
    })

    //SERIES MEJOR PUNTUADA
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&page=1")
      .then(function(response) {
          return response.json();
      })
      .then(function(resultadoFinalAire) {
          var listadoAire = document.querySelector("#listaMejor ");
          //console.log(resultadoFinal.results);

          /*
          for(var i = 0; i < resultadoFinal.results.length; i++) {
              console.log(resultadoFinal.results[i].original_name);
          }
          */
         for(var i = 0; i < resultadoFinalAire.results.length; i++) {
           console.log(resultadoFinalAire.results[i]);
             listadoAire.innerHTML += '<li>'+ '<a href="../detalles-serie/detalles-serie.html">' + '<img src="https://image.tmdb.org/t/p/w300/' + resultadoFinalAire.results[i].poster_path + '">' + '</a>'+ '</li>'

         }
      })

}
