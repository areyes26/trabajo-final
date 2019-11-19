window.addEventListener("load", function() {
  var queryString = location.search; //Capturamos la query string del navegador

  var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString

  var incluir = searchParams.get("incluir");
  var excluir = searchParams.get("excluir");
  var orden = searchParams.get("orden");
  var año = searchParams.get("año");

  console.log(incluir, excluir, orden, año);
  var page = 1;
  vermas()

  function vermas() {
    var url = "https://api.themoviedb.org/3/discover/tv?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US&sort_by=" + orden + "&first_air_date_year=" + año + "&page=" + page + "&timezone=America%2FNew_York&with_genres=" + incluir + "&without_genres=" + excluir + "&include_null_first_air_dates=false";

    console.log(url);
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        var destino = document.querySelector(".resultados");
        var datosFinales = datos.results;
        var titulo = document.querySelector(".primero");

        console.log(datos, page);

        console.log(datos);

        if (datos.results.length === 0 && page == 1) {
          titulo.innerText = "No se encontraron resultados";
          titulo.style.textTransform = "none";
          titulo.style.padding = "20%"
          titulo.style.textAlign = "center"
          titulo.style.color = "Red"
        }

        for (var i = 0; i < datosFinales.length; i++) {
          if (datos.results[i].poster_path == null) {
            var posterNot = document.querySelector(".resultados")
            posterNot.innerHTML += '<li><a href="../detalles-serie/detalles-serie.html?id=' + datos.results[i].id + '"> ' + '<img src="../images/not-found.png">' + '</a></li>'

          } else {
            destino.innerHTML += '<li><a href="../detalles-serie/detalles-serie.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w300/' + datos.results[i].poster_path + '">' + '</a></li>'
          }
        }
        if (datos.total_pages == page) {
          console.log('cortamo');
          window.removeEventListener('scroll', scrolled)
          return

        }
      })

  }
  window.addEventListener('scroll', scrolled)

  function scrolled(e) {
    var myDiv = document.querySelector('body')
    if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
      // scrolledToBottom(e);
      page++
      vermas()
    }

  }





});
