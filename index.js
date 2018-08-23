document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
    //do something here
    updateHTMLContent()
  })
  
  terminatorButton.addEventListener('click', (event) => {
    //do something here
  })
});

function updateHTMLContent(){
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let genre = document.getElementById('genre')
  let filmRating = document.getElementById('filmRating')
  
  title.innerHTML = movies['Titanic'].title
  director.innerHTML = movies['Titanic'].director
  genre.innerHTML = movies['Titanic'].genre
  filmRating.innerHTML = movies['Titanic'].filmRating
}