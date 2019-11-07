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
         listado.innerHTML += "<li class='unaClase' id='" + resultadoFinal.results[i].id + "'>" + resultadoFinal.results[i].original_name + "</li>"
     }
  })
