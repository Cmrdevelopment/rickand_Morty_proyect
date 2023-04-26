import './style.css'

// Almacenar el contenedor y apunto al main para poder pintar, sin él no podría pintar
const main = document.querySelector("main")

//! esto lo ponemos después de termianr la página conjuntametne con el argumento pageNum del getData
/// Variable del numero de página
let pageNum = 1;

// Con esto lo que hacemos es gestionar la asincronia, son datos desde fuera que tenemos que traer a la aplicación
/// Almacename en data el resultado del fetch y el await dice hasta que no termines de hacer esto no pases a lo siguiente
/// En datosJson me almecenas los datos al convertirlo en data.json y hasta que no termines no me los metas en datosJson
const getData = async (num) => {
  const data = await fetch(`https://rickandmortyapi.com/api/character?page=${num}`)
  const datosJson = await data.json()
// datosJson son todos los valores de la lista y character cada uno de los elementos o valores
  for (const character of datosJson.results) {
  const figure = document.createElement("figure")
  figure.innerHTML = `
  <img src=${character.image} alt=${character.name} />
  <h3>${character.name}</h3>
  <h3>${character.species}</h3>
  `
  main.appendChild(figure) // que main tenga hijos de cada figure
  }
}
getData(pageNum)

// Eventos: voy a buscar el botón
// y le voy a decir que nextBtn tenga un escuchador de eventos que al hacer click en el botón coja la variable pageNum y le sume 1
//Cada vez que le de al click me haré TODO el proceso de arriba pero en vez de la 1ra página, lo ahrá en la segunda y así en la siguiente, etc
const nextBtn = document.querySelector("#nextBtn")
nextBtn.addEventListener("click", () => {
  pageNum++;
  getData(pageNum)
})


