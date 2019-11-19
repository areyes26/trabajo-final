window.addEventListener("load", function() {
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      console.log(datos);
      var buscador = document.querySelector(".avanzado");
      var listaIncluir = document.querySelector(".incluir");
      var listaExcluir = document.querySelector(".excluir");
      // buscador.append(form);
      var gnre = datos.genres;

      for (var i = 0; i < gnre.length; i++) {
        listaIncluir.innerHTML += '<option value="' + datos.genres[i].id + '">' + datos.genres[i].name + '</option>'
        listaExcluir.innerHTML += '<option value="' + datos.genres[i].id + '">' + datos.genres[i].name + '</option>'
      }
    })




});
