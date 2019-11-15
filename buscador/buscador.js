window.addEventListener("load",function(){
  var queryString = location.search; //copiamos la quey string navegador


  var searchParams = new URLSearchParams(queryString); // con esto encontramos los datos y posiciones  de la querystring
  var buscar  = searchParams.get("buscar");

  var url = "https://api.themoviedb.org/3/search/tv?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&query=" + buscar + "&page=1"
  console.log(url);
  fetch(url)
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    var destino = document.querySelector(".resultados");
    var datosFinales = datos.results;
    var titulo = document.querySelector(".primero");

    titulo.innerText = buscar;

    console.log(datos);

    for (var i = 0; i < datosFinales.length; i++) {
      destino.innerHTML+= '<li><a href="info_series.html?id='+ datos.results[i].id+'"> ' + '<img src="https://image.tmdb.org/t/p/w300/' + datos.results[i].poster_path + '">' + '</a>'+ '</li>'
    }
  })
})
