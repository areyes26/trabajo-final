window.onload = function() {

  /*Serie Random*/
  var numRandom = document.querySelector(".random")

  function aleatorio() {
    return Math.floor(Math.random() * 9541)
  }

  console.log(aleatorio());


  numRandom.innerHTML = '<a href="../detalles-serie/detalles-serie.html?id=' + aleatorio() + '">' + 'Random' + '</a>'

  // FAVORITOS
  var recuperoStorage = localStorage.getItem("seriesFavoritos");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritos = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritos = JSON.parse(recuperoStorage);
  }

  //VER MAS TARDE
  var recuperoStorageVer = localStorage.getItem("seriesFavoritosVer");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorageVer == null) {
    // Creo una lista vacia
    seriesFavoritosVer = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritosVer = JSON.parse(recuperoStorageVer);
  }



  /*Info de la serie*/
  var querystring = location.search;
  var query2 = new URLSearchParams(querystring)
  var id = query2.get("id")


  fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
    .then(function(respuesta) {
      return respuesta.json();
    })

    .then(function(resultadoFinal) {
      console.log(resultadoFinal);
      var info_conteiner = document.querySelector(".infoSerie");
      var imgSerie = document.querySelector(".imagenSerie");
      info_conteiner.innerHTML += '<h1>' + resultadoFinal.name + '</h1>'
      var gnre = resultadoFinal.genres
      var losgeneros = "";
      for (var i = 0; i < gnre.length; i++) {
        losgeneros += ' <a href="../serie-por-genero/seriePorGenero.html?id=' + resultadoFinal.genres[i].id + '&name=' + resultadoFinal.genres[i].name + '">' + resultadoFinal.genres[i].name + '</a> '
      }
      info_conteiner.innerHTML += '<h3>Géneros:' + losgeneros + '</h3>'
      info_conteiner.innerHTML += '<h3>Idioma original:' + resultadoFinal.original_language + '</h3>'
      info_conteiner.innerHTML += '<h3>Sinopsis:' + '<p>' + resultadoFinal.overview + '</p></h3>'

      /* Fecha de estreno */
      info_conteiner.innerHTML += '<h3><strong>Fecha de estreno: </strong>' + resultadoFinal.first_air_date + '</h3>'

      /* Imagen de la serie */
      if (resultadoFinal.poster_path == null) {
        imgSerie.innerHTML = '<img src="../images/not-found.png">'
      }
      else{imgSerie.innerHTML = '<img src="https://image.tmdb.org/t/p/w500/' + resultadoFinal.poster_path + '">'
    }
    })


  /*FavoritoS */

  var datos = new URLSearchParams(location.search);
  var id = datos.get("id");

  if (seriesFavoritos.includes(id)) {
    document.querySelector("#buttonFav").innerHTML = "QUITAR DE FAVORITOS";
  }



  fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
    .then(function(response) {
      return response.json();
    })
    .then(function(id) {

    })

  document.querySelector("#buttonFav").onclick = function() {

    var botonFavorito = document.querySelector("#buttonFav")

    //Paso 2: Modificar la informacion
    // Si la serie ya era favorito
    if (seriesFavoritos.includes(id)) {
      // Lo quito
      var index = seriesFavoritos.indexOf(id);
      seriesFavoritos.splice(index, 1);
      botonFavorito.innerHTML = "AGREGAR FAVORITO";
    } else {
      //Lo agrego
      seriesFavoritos.push(id);
      botonFavorito.innerHTML = "QUITAR DE FAVORITOS";
    }


    //Paso 3: Escribir en storage
    var infoParaStorage = JSON.stringify(seriesFavoritos);
    localStorage.setItem("seriesFavoritos", infoParaStorage);
    console.log(localStorage);
  }




  /*ver mas tarde */

  var datos = new URLSearchParams(location.search);
  var idVer = datos.get("id");

  if (seriesFavoritosVer.includes(idVer)) {
    document.querySelector("#buttonVer").innerHTML = "QUITAR DE VER MAS TARDE";
  }



  fetch("https://api.themoviedb.org/3/tv/" + idVer + "?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
    .then(function(response) {
      return response.json();
    })


  document.querySelector("#buttonVer").onclick = function() {


    //Paso 2: Modificar la informacion
    // Si la serie ya era favorito
    if (seriesFavoritosVer.includes(idVer)) {
      // Lo quito
      var index = seriesFavoritosVer.indexOf(idVer);
      seriesFavoritosVer.splice(index, 1);
      document.querySelector("#buttonVer").innerHTML = "VER MAS TARDE";
    } else {
      //Lo agrego
      seriesFavoritosVer.push(idVer);
      document.querySelector("#buttonVer").innerHTML = "QUITAR DE VER MAS TARDE";
    }


    //Paso 3: Escribir en storage
    var infoParaStorage = JSON.stringify(seriesFavoritosVer);
    localStorage.setItem("seriesFavoritosVer", infoParaStorage);
    console.log(localStorage);
  }



  /* Trailer Serie */

  fetch("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(resultadoFinal) {
      console.log(resultadoFinal);
      var containerTrailer = document.querySelector(".trailerSerie");
      var contenedorSeries = document.querySelector(".diceTrailer")

      for (var i = 0; i <resultadoFinal.results.length; i++) {
console.log(resultadoFinal);
        if (resultadoFinal.results.length <1) {
          contenedorSeries.innerHTML = '<h1>'+'</h1>'
        }else {
          containerTrailer.innerHTML += '<div >' + '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + resultadoFinal.results[i].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>' + "</div>"
        }
      }
    })


  /*BOTON OCULTAR / MOSTRAR */
  var recom = document.querySelector(".containerRecomendados");
  var btn = document.querySelector("#botonRecomendaciones");

  btn.onclick = function() {
    recom.classList.toggle("show")
  }


  /* Recomendados Serie */
  fetch("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(resultadoFinal) {
      console.log(resultadoFinal);
      var recomen = document.querySelector("#recomendados");
      var nomostrar = document.querySelector(".containerRecomendados")
      for (var i = 0; i < resultadoFinal.results.length; i++) {
        if (resultadoFinal.results.length === 0) {
          nomostrar.innerHTML += '<h1>'+'</h1>'
        }
        else {

        if (resultadoFinal.results[i].poster_path == null) {
        recomen.innerHTML += '<li><a href="../detalles-serie/detalles-serie.html?id=' + resultadoFinal.results[i].id + '"> ' + '<img  class= "imgreco" src="../images/not-found.png">' + '</a></li>'
        }
      else {
        recomen.innerHTML += '<li><a href="../detalles-serie/detalles-serie.html?id=' + resultadoFinal.results[i].id + '"> ' + '<img  class= "imgreco" src="https://image.tmdb.org/t/p/w500/' + resultadoFinal.results[i].poster_path + '">' + '</a></li>'
      }
      }
      }
      console.log(resultadoFinal.results.length);
    })



  // ESTO ES PARA CELULAR //

  // '<li class="uk-width-3-4">'+ '<div class="uk-panel">' + '<a href="../detalles-serie/detalles-serie.html?id='+ resultadoFinal.results[i].id +'">' + '<img src="https://image.tmdb.org/t/p/original/' + resultadoFinal.results[i].poster_path + '">' + '</a>' + '<div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">' + '<h3 class="uk-margin-remove">'+'Bottom'+'</h3>' + '<p class="uk-margin-remove">' + 'holaaaa' +'</p>' + '</div>' + '</div>' + '</li>'



}
