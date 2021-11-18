const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = "./assets/json/movies.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var myFilm = request.response;
    populateHeader(myFilm);
    showFilm(myFilm);
};

function showFilm(jsonObj) {
    var jsonFilm = jsonObj['members'];

    for (var i = 0; i < jsonFilm.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myStars = document.createElement('p');
        var myImage = document.createElement('p');

        myH2.textContent = jsonFilm[i].original_title;
        myPara1.textContent = jsonFilm[i].overview;
        myStars.textContent = jsonFilm[i].vote_average;
        myImage.textContent = jsonFilm[i].poster_path;

        for (var j = 0; j < jsonFilm.length; j++) {
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myStars);
            myArticle.appendChild(myImage);
            section.appendChild(myArticle);
        }
    }
};

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['original_title'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'overview : ' + jsonObj['overview'];
    header.appendChild(myPara);
}