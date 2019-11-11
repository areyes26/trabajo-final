window.onload = function(){

/*Info de la serie*/
var querystring = location.search;
var query2 = new URLSearchParams(querystring)
var id = query2.get("id")
fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
.then(function(respuesta){
return respuesta.json();
})

.then(function(resultadoFinal){
console.log(resultadoFinal);
 var info_conteiner = document.querySelector(".infoSerie");
 var imgSerie = document.querySelector(".imagenSerie");
 info_conteiner.innerHTML += '<h1>'+  resultadoFinal.name + '</h1>'
 var gnre = resultadoFinal.genres
 var losgeneros ="";
 for (var i=0; i<gnre.length; i++){
   losgeneros += ' <a href="series_xgenero.html?'+ resultadoFinal.genres[i].id+'">' + resultadoFinal.genres[i].name + '</a> '
 }
 info_conteiner.innerHTML += '<h3>Géneros:' +  losgeneros + '</h3>'
 info_conteiner.innerHTML += '<h3>Idioma original:'+  resultadoFinal.original_language + '</h3>'
 info_conteiner.innerHTML += '<h3>Sinopsis:'+ '<p>' + resultadoFinal.overview + '</p></h3>'

 /* Fecha de estreno */
 info_conteiner.innerHTML += '<h3><strong>Fecha de estreno: </strong>'+  resultadoFinal.first_air_date + '</h3>'

 /* Imagen de la serie */
 imgSerie.innerHTML = '<img src="https://image.tmdb.org/t/p/w500/'+ resultadoFinal.poster_path + '">'
})













}
