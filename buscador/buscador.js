window.addEventListener("load", function() {
  var queryString = location.search; //Capturamos la query string del navegador
  var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString
  var buscar = searchParams.get("buscar"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").
  var page = 1;
  vermas()

  function vermas() {
    var url = "https://api.themoviedb.org/3/search/tv?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&query=" + buscar + '&page=' + page
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        var destino = document.querySelector(".resultados");
        var datosFinales = datos.results;
        var titulo = document.querySelector(".primero");
        titulo.innerText = buscar;
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
          // alert("No se encuentran resultados")
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

  /*Serie Random*/
  var numRandom = document.querySelector(".random")

  function aleatorio() {
    return Math.floor(Math.random() * 9541)
  }

  console.log(aleatorio());


  numRandom.innerHTML = '<a href="../detalles-serie/detalles-serie.html?id=' + aleatorio() + '">' + 'Serie Aleatoria' + '</a>'
  // var btn = document.querySelector("#page");
  // btn.onclick =  function() {
  //   page++;
  //   vermas()
  // }
});
