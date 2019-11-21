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
      var gnre = datos.genres;

      for (var i = 0; i < gnre.length; i++) {
        listaIncluir.innerHTML += '<option value="' + datos.genres[i].id + '">' + datos.genres[i].name + '</option>'
        listaExcluir.innerHTML += '<option value="' + datos.genres[i].id + '">' + datos.genres[i].name + '</option>'
      }
    })

    //validacionde info
    var avanzado = document.querySelector(".avanzado");
    var opcion1 = document.querySelector(".incluir");
    var opcion2 = document.querySelector(".excluir");
    var input = document.querySelector("input[name=año]");

    var option1Selected = opcion1.selectedIndex;
    var option2Selected = opcion2.selectedIndex;
    console.log(opcion1.options);
    console.log(option1Selected);


    avanzado.onsubmit = function(event){
      if (opcion1.options[opcion1.selectedIndex].value == 0 && opcion2.options[opcion2.selectedIndex].value == 0 && input.value == "") {
        event.preventDefault();
        UIkit.notification({
          message: 'Complete algun campo',
          status: 'primary',
          pos: 'top-center',
          timeout: 3000
        });
      }
      else if (opcion1.options[opcion1.selectedIndex].value != 0 && opcion2.options[opcion2.selectedIndex].value != 0) {
        event.preventDefault();
        UIkit.notification({
          message: 'No puede elegir 2 Géneros a la vez',
          status: 'primary',
          pos: 'top-center',
          timeout: 3000
        });
      }
    }


});
