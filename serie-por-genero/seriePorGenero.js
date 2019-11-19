window.onload = function(){


  /*Serie Random*/
  var numRandom = document.querySelector(".random")
  function aleatorio(){
    return Math.floor(Math.random() *9541)
  }

  console.log(aleatorio());


  numRandom.innerHTML = '<a href="../detalles-serie/detalles-serie.html?id='+ aleatorio() +'">'+ 'Serie Aleatoria' + '</a>'

//////////////////Info de la serie
var querystring = location.search;
var query2 = new URLSearchParams(querystring)
var id = query2.get("id")
var page = 1;
vermas()
function vermas() {

/*Generos de SERIES*/
var url = "https://api.themoviedb.org/3/discover/tv?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&sort_by=popularity.desc&page=2" + page + "&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=" + id;

fetch(url)
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var div = document.querySelector(".listaGeneros");
  var series = datos.results;
  /*Titulo*/
  var titulo = document.querySelector(".tituloSerie");
  var name = query2.get("name")
  titulo.innerHTML = name;

  for (var i=0; i<series.length; i++){
    div.innerHTML += '<li><a href="../detalles-serie/detalles-serie.html?id='+ datos.results[i].id +'"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
  }

  for(var i=0; i<series.length; i++){
    div.innerHTML += '<li><a href="../detalles-serie/detalles-serie.html?id='+ datos.results[i].id+'"> '+'<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
  }
  if (datos.total_pages == page) {
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
}
