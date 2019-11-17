window.onload = function(){


  /*Serie Random*/
  var numRandom = document.querySelector(".random")
  function aleatorio(){
    return Math.floor(Math.random() *9541)
  }

  console.log(aleatorio());


  numRandom.innerHTML = '<a href="../detalles-serie/detalles-serie.html?id='+ aleatorio() +'">'+ 'Serie Aleatoria' + '</a>'

//SERIES POPULARES
fetch("https://api.themoviedb.org/3/tv/popular?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&page=1")
  .then(function(response) {
      return response.json();
  })
  .then(function(resultadoFinal) {
      var listado = document.querySelector("#listaPopular");
    //  console.log(resultadoFinal.results);

      /*
      for(var i = 0; i < resultadoFinal.results.length; i++) {
          console.log(resultadoFinal.results[i].original_name);
      }
      */
     for(var i = 0; i < resultadoFinal.results.length; i++) {
       console.log(resultadoFinal.results[i]);
         listado.innerHTML += '<li>'+ '<a href="../detalles-serie/detalles-serie.html?id='+ resultadoFinal.results[i].id +'">' + '<img src="https://image.tmdb.org/t/p/original/' + resultadoFinal.results[i].poster_path + '">' + Descubrir +  '</a>'+ '</li>'

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
           listadoAire.innerHTML += '<li>'+ '<a href="../detalles-serie/detalles-serie.html?id='+ resultadoFinalAire.results[i].id +'">' + '<img src="https://image.tmdb.org/t/p/original/' + resultadoFinalAire.results[i].poster_path + '">' + '</a>'+ '</li>'

       }
    })

    //SERIES MEJOR PUNTUADA
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&page=1")
      .then(function(response) {
          return response.json();
      })
      .then(function(resultadoFinalMejor) {
          var listadoMejor = document.querySelector("#listaMejor ");
          //console.log(resultadoFinal.results);

          /*
          for(var i = 0; i < resultadoFinal.results.length; i++) {
              console.log(resultadoFinal.results[i].original_name);
          }
          */
         for(var i = 0; i < resultadoFinalMejor.results.length; i++) {
           console.log(resultadoFinalMejor.results[i]);
             listadoMejor.innerHTML += '<li>'+ '<a href="../detalles-serie/detalles-serie.html?id='+ resultadoFinalMejor.results[i].id +'">' + '<img src="https://image.tmdb.org/t/p/original/' + resultadoFinalMejor.results[i].poster_path + '">' + '</a>'+ '</li>'

         }
      })

}
