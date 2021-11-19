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
            let jsonFilm = [element];
            for (let i = 0; i < jsonFilm.length; i++) {
                let myArticle = document.createElement('article');
                let myH2 = document.createElement('h2');
                let myPara1 = document.createElement('p');
                console.log(myPara1);
                let myStars = document.createElement('p');
                let myImage = document.createElement('p');
                myH2.textContent = jsonFilm[i].original_title;
                myPara1.textContent = jsonFilm[i].overview;
                myPara1.textContent = myPara1.textContent.substr(0, 30);
                console.log(myPara1.textContent);
                myStars.textContent = jsonFilm[i].vote_average;
                myImage.textContent = jsonFilm[i].poster_path;
                header.appendChild(myImage);
                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myStars);
                section.appendChild(myArticle);




                // crée un nouvel élément div
                var newP = document.createElement("p");
                // et lui donne un peu de contenu
                var newContent = document.createTextNode('Hi there and greetings!');
                // ajoute le nœud texte au nouveau div créé
                newP.appendChild(newContent);

                // ajoute le nouvel élément créé et son contenu dans le DOM
                var currentP = document.getElementByclass('class="text-center"');
                document.body.insertBefore(newP, currentP);
                console.log(currentP);
            }
        });
    });