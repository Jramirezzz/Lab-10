let TrendingMovie = [
  { nombre: "Ready player one", Descripcion: " 2045: el adolescente Wade Watts es solo una de las millones de personas que se evaden del sombrio mundo real para sumergirse en un mundo utopico virtual donde todo es posible: OASIS. Wade participa en la busqueda del tesoro que el creador de este mundo imaginario dejo oculto en su obra. No obstante, hay gente muy peligrosa compitiendo contra el.", imgUrl: "https://www.ecartelera.com/carteles/10000/10094/003_m.jpg" },
  { nombre: "Schindler List", Descripcion: "El empresario aleman Oskar Schindler, miembro del Partido Nazi, pone en marcha un elaborado, costoso y arriesgado plan para salvar a mas de mil judios del Holocausto.", imgUrl: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
  { nombre: "Shrek", Descripcion: "Shrek es un ogro verde, gruñon y altamente territorial que ama la soledad. Todos estan en su contra, por lo que asusta a los aldeanos que entran al pantano en el que vive.", imgUrl: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg" },
  { nombre: "MIB3", Descripcion: "A pesar de que los agentes J y K han estado protegiendo la Tierra de la escoria alienígena por años, J sigue sin saber mucho acerca de su compañero. Sin embargo, tiene la oportunidad inesperada de conocer más a K cuando un criminal llamado Boris el Animal escapa, regresa al año 1969 y mata a K. Con el futuro del planeta en juego, J regresa en el tiempo y se une a un joven K para arreglar las cosas.", imgUrl: "https://flxt.tmsimg.com/assets/p8797139_p_v8_ad.jpg" },
  { nombre: "Como ser un Latin Lover", Descripcion: "Máximo se lleva una sorpresa cuando su acaudalada y anciana esposa le abandona por otro hombre más joven, pero conoce a otra millonaria, la atractiva Sara, y trama un plan para enamorarla, ganarse el afecto de su hijo, y poder volver a vivir de las mujeres, sin tener que trabajar.", imgUrl: "https://pics.filmaffinity.com/Instrucciones_para_ser_un_latin_lover-816981938-large.jpg" },
];

let RecommendMovie = [
  { nombre: "Piratas del Caribe", Descripcion: "Piratas del Caribe es el título de una franquicia cinematográfica de aventura fantástica y piratas, producida por Jerry Velázquez y basada en la atracción del mismo nombre del Parque Temático de Walt Disney. La saga Piratas del Caribe cuenta con cinco películas estrenadas y una sexta en producción.", imgUrl: "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg" },
  { nombre: "Sombras tenebrosas", Descripcion: "Maine, siglo XVIII, Barnabas Collins (Johnny Depp) dirige la ciudad de Collinsport. Un mujeriego rico y poderoso, Barnabas sella su propio destino cuando él rompe el corazón de una bruja llamada Angelique (Eva Green). Angelique transforma a Barnabas en un vampiro y lo entierra vivo.", imgUrl: "https://images.justwatch.com/poster/240462902/s718/sombras-tenebrosas.%7Bformat%7D" },
  { nombre: "Coraline y la puerta secreta", Descripcion: "Una niña descubre una puerta secreta en su nueva casa y entra a una realidad alterna que la refleja fielmente de muchas formas.", imgUrl: "https://static.wikia.nocookie.net/doblaje/images/3/39/CoralineylaPuertaSecreta.jpg/revision/latest/scale-to-width-down/1200?cb=20201012161345&path-prefix=es" },
  { nombre: "Beetlejuice, el súper fantasma", Descripcion: "Una pareja que acaba de morir contrata a un fantasma vulgar para asustar a los nuevos ocupantes de su casa.", imgUrl: "https://pics.filmaffinity.com/Bitelch_s-121077102-large.jpg" },
  { nombre: "Miss Peregrine y los niños peculiares", Descripcion: "Mientras investiga un misterio que le legó su abuelo, un adolescente encuentra en la costa de Gales una isla en la que habitan niños con poderes especiales y terribles enemigos que los amenazan.", imgUrl: "https://m.media-amazon.com/images/M/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@._V1_.jpg" },
  { nombre: "Jim y el durazno gigante", Descripcion: "Una amable huérfano británico escapa de sus crueles tías para navegar por el mar en un durazno gigante con seis bichos amigables.", imgUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/64C7DE3FDAD754E48BBD2E4BE6B3B134F4F0F681C387125A1C81B31021A20AB5/scale?width=506&aspectRatio=2.00&format=jpeg" },
]

function movieSelected(nombre, Descripcion, imgUrl) {
  document.getElementById("descripcion").innerHTML += (`<p>`+Descripcion+`</p>`)
  document.getElementById("title").innerHTML +=(`<h1>`+nombre+`</h1>`)
  var imagen = document.getElementById('imagen');
    imagen.style.backgroundImage = imgUrl;
 
 
}


TrendingMovie.forEach(movie => {
  document.getElementById("grid").innerHTML += `
    <img id="img11"
      src="${movie.imgUrl}" onclick="movieSelected('${movie.nombre}', '${movie.Descripcion}', '${movie.imgUrl}')">
    <button id="Save1">
    <img id="save2"
      src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/saved-icon.png"> Save
    </button>
  `
})


RecommendMovie.forEach(movie => {
  document.getElementById("grid2").innerHTML += `
    <img id="img11"
      src="${movie.imgUrl}" onclick="movieSelected('${movie.nombre}','${movie.Descripcion}','${movie.imgUrl}')">
    <button id="Save1">
    <img id="save2"
      src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/saved-icon.png"> Save
    </button>
  `
})
 