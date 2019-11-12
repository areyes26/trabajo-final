window.onload = function(){




  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
    .then(function(response) {
        return response.json();
    })

    for (var i = 0; i < peliculas.length; i++) {
        document.querySelector(".contenedor-action").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
      }
    })

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(datos) {
        var peliculas = datos.results
        console.log(peliculas);

       for (var i = 0; i < peliculas.length; i++) {
          document.querySelector(".div-miedo").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
        }
      })
      
     fetch("https://api.themoviedb.org/3/discover/movie?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14")
        .then(function(respuesta) {
          return respuesta.json()
        })
        .then(function(datos) {
          var peliculas = datos.results
          console.log(peliculas);

          for (var i = 0; i < peliculas.length; i++) {
            document.querySelector(".div-fantasia").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
          }
        })


        fetch("https://api.themoviedb.org/3/discover/movie?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878")
          .then(function(respuesta) {
            return respuesta.json()
          })
          .then(function(datos) {
            var peliculas = datos.results
            console.log(peliculas);

            for (var i = 0; i < peliculas.length; i++) {
              document.querySelector(".div-ficcion").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
            }
          })


          fetch("https://api.themoviedb.org/3/discover/movie?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18")
            .then(function(respuesta) {
              return respuesta.json()
            })
            .then(function(datos) {
              var peliculas = datos.results
              console.log(peliculas);

              for (var i = 0; i < peliculas.length; i++) {
                document.querySelector(".div-drama").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
              }
            })


            fetch("https://api.themoviedb.org/3/discover/movie?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80")
              .then(function(respuesta) {
                return respuesta.json()
              })
              .then(function(datos) {
                var peliculas = datos.results
                console.log(peliculas);

                for (var i = 0; i < peliculas.length; i++) {
                  document.querySelector(".div-crimen").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
                }
              })




















}
