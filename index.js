document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
    //do something here
    updateHTMLContent('Titanic')
  })
  
  terminatorButton.addEventListener('click', (event) => {
    //do something here
    updateHTMLContent('Terminator 2')
  })
});

function updateHTMLContent(movieName){
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let genre = document.getElementById('genre')
  let filmRating = document.getElementById('filmRating')
  let poster = document.getElementById('poster')
  let description = document.getElementById('description')
  let audienceScore = document.getElementById('audienceScore')
  let currentMovies = movies[movieName]
  let cast= document.getElementById('cast')
  
  title.innerHTML = currentMovies.title
  director.innerHTML = currentMovies.director
  genre.innerHTML = currentMovies.genre
  filmRating.innerHTML = currentMovies.filmRating
  poster.setAttribute('src', currentMovies.poster)
  description.innerHTML = currentMovies.description
  audienceScore.innerHTML = currentMovies.audienceScore
  let castInnerHTML = "<ul>"
  
  for (let i = 0; i < currentMovies.cast.length; i++){
    let role = currentMovies.cast[i].role
    let actor = currentMovies.cast[i].actor
    castInnerHTML += "<li>" + role + ": " + actor + "</li>"
    return castInnerHTML
  }
}