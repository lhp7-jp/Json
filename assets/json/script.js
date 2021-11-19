const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'assets/json/movies.json';

fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].original_title);
       data.results.forEach(element => {
            let myOriginal_title = (element.original_title);
            let myId = (element.id);
            let myPoster_Path = (element.myPoster_Path);
            let myVote_average = (element.vote_average);
            console.log(myOriginal_title);
            console.log(myId);
            console.log(myPoster_Path);
            console.log(myVote_average);
        });
    });



// function myJSON() {
//  let jsonFilm = jsonObj['results'];
//  for (let i = 0; i < jsonFilm.length; i++) {
//   let myArticle = document.createElement('article');
//   let myH2 = document.createElement('h2');
//   let myPara1 = document.createElement('p');
//   let myStars = document.createElement('p');
//   let myImage = document.createElement('p');
//   myH2.textContent = jsonFilm[i].original_title;
//   myPara1.textContent = jsonFilm[i].overview;
//   myStars.textContent = jsonFilm[i].vote_average;
//   myImage.textContent = jsonFilm[i].poster_path;
//   myArticle.appendChild(myH2);
//   myArticle.appendChild(myPara1);
//   myArticle.appendChild(myStars);
//   section.appendChild(myArticle);
//     }