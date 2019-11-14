window.onload = function(){

  /* Header y Footer */

      fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
      .then(function(response){
       return response.json();
      })
      .then(function(resultadoFinal){
       console.log(resultadoFinal);
       var generos = document.querySelector("ul.listaGeneros");

        for (var i = 0; i < resultadoFinal.genres.length; i++){
          console.log(resultadoFinal.genres[i]);
          generos.innerHTML += '<li>'+'<a href="#">'+
           resultadoFinal.genres[i].name + '</a>' + '</li>'
        }
      })
















}
