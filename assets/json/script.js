const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'assets/json/movies.json';
const longTexte = 50;


function getInfo() {
fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let myOriginal_title = (element.original_title);
            let myId = (element.id);
            let myPoster_Path = (element.myPoster_Path);
            let myVote_average = (element.vote_average);
            let jsonFilm = [element];
            for (let i = 0; i < jsonFilm.length; i++) {
                //let myImage = document.createElement('img');
                const parent = document.getElementById("p1");
                const child = document.getElementById("img1");
                const para = document.createElement("img");
                const node = document.createTextNode(jsonFilm[i].poster_path);
                console.log(jsonFilm[i].poster_path);
                para.appendChild(node);
                parent.replaceChild(para,child);

                
                
                let myArticle = document.createElement('article');
                let myH2 = document.createElement('h2');
                let myPara1 = document.createElement('p');
                let myStars = document.createElement('p');
                myH2.textContent = jsonFilm[i].original_title;
                myPara1.textContent = jsonFilm[i].overview;
                myPara1.textContent = myPara1.textContent.substr(0, longTexte);
                console.log(myPara1.textContent);
                myStars.textContent = jsonFilm[i].vote_average;
                console.log(myStars.textContent/2);
                console.log(Math.floor(myStars.textContent/2));
                



                myArticle.appendChild(myImage);
                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myStars);
                section.appendChild(myArticle);
            
           
        }
        })
    })
};      

//     let mySearch = document.getElementById(("mysearch").value);
//     fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${mySearch}", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
//             "x-rapidapi-key": "e66dbbb5cdmsh2608ea682fb5676p152e7ejsnfd2883330d23"
//         }
//     })
//     .then(response => response.json())
//     .then (data => { 
//         console.log(data.title[0].title);
//         console.log(data);
//     })
//                 
   

// // function addElement () {
// //    document.body.onload = addElement;
// //   // crée un nouvel élément div
// //   var newDiv = document.createElement("div");
// //   // et lui donne un peu de contenu
// //   var newContent = document.createTextNode('Hi there and greetings!');
// //   // ajoute le nœud texte au nouveau div créé
// //   newDiv.appendChild(newContent);

// //   // ajoute le nouvel élément créé et son contenu dans le DOM
// //   var currentDiv = document.getElementById('div1');

// //   document.body.insertBefore(newDiv, currentDiv);

