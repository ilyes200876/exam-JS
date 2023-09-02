let zone1 = document.querySelector("#zone1");
let zone2 = document.querySelector("#zone2");
let filter = document.querySelector("#filter");
console.log(filter);

let elements = [
  {image:"img/animal1.jpg", nom:"animal1", categorie:"animaux", prix:200},
  {image:"img/animal2.jpg", nom:"animal2", categorie:"animaux", prix:200},
  {image:"img/animal3.jpg", nom:"animal3", categorie:"animaux", prix:200},
  {image:"img/animal4.jpg", nom:"animal4", categorie:"animaux", prix:200},

  {image:"img/personne1.jpg", nom:"personne1", categorie:"personnes", prix:300},
  {image:"img/personne2.jpg", nom:"personne2", categorie:"personnes", prix:300},
  {image:"img/personne3.jpg", nom:"personne3", categorie:"personnes", prix:300},
  {image:"img/personne4.jpg", nom:"personne4", categorie:"personnes", prix:300},

  {image:"img/paysage1.jpg", nom:"paysage1", categorie:"paysages", prix:100},
  {image:"img/paysage2.jpg", nom:"paysage2", categorie:"paysages", prix:100},
  {image:"img/paysage3.jpg", nom:"paysage3", categorie:"paysages", prix:100},
  {image:"img/paysage4.jpg", nom:"paysage4", categorie:"paysages", prix:100},
];


function genererVignette(image, nom, categorie, prix){
  elements.forEach(function(element, i){
    let elementFigure = document.createElement("figure");
    elementFigure.className = `vignette toutAfficher ${element.categorie}`;
    elementFigure.setAttribute("id", `v${i}`);
    zone2.appendChild(elementFigure);
    let elementImage = document.createElement("img");
    elementImage.setAttribute("src", element.image);
    elementImage.setAttribute("alt", element.nom);
    elementImage.style.width = "200px";
    elementFigure.appendChild(elementImage);
    let elementFigcaption = document.createElement("figcaption");
    elementFigcaption.innerHTML = element.nom;
    elementFigure.appendChild(elementFigcaption);
    elementFigure.style = "cursor: pointer;";
    elementFigure.onmousemove = (e) => {
      
      elementFigure.style.boxShadow = "10px 10px 30px rgb(4, 4, 59)"
    };

    elementFigure.onmouseout = (e) => {
      elementFigure.style.boxShadow = "";
    };

    elementFigure.onclick = (e) => {
      let balise = e.target;
      let cheminBalise = balise.getAttribute("src");
      zone1.style.background = `url(${cheminBalise} ) center center no-repeat`;
      zone1.style.backgroundSize = "cover";
      zone1.style.transition = "1s ease-in-out";

      zone1.innerHTML = `<div id="description"><div><h1>Nom</h1><p>${element.nom}</p></div><div><h1>Catégorie</h1><p>${element.categorie}</p></div><div><h1>Prix</h1><p>${element.prix}€</p></div></div>`;
      let description = document.querySelector("#description");
      description.style.color = "white";
      description.style.backgroundColor = "black";
      description.style.opacity = "0.7";
      description.style.height = "100%";
      description.style.width = "30%";
      

    };
    
    


    window.addEventListener("load", function(){
      zone1.style.background = `url(img/animal1.jpg) center center no-repeat`;
      zone1.style.backgroundSize = "cover";
      zone1.innerHTML = `<div id="description"><div><h1>Nom</h1><p>animal1</p></div><div><h1>Catégorie</h1><p>Animaux</p></div><div><h1>Prix</h1><p>200€</p></div></div>`;
      let description = document.querySelector("#description");
      description.style.color = "white";
      description.style.backgroundColor = "black";
      description.style.opacity = "0.7";
      description.style.height = "100%";
      description.style.width = "30%";
    });

  }); 

  
}


genererVignette();


filter.onchange = function majFiltre(e){

  let typeChoisi = e.target.value;

  // d'abord, on cache tous les éléments
  let toutAfficher = document.querySelectorAll(".toutAfficher");
  cacherElements(toutAfficher);

  // ensuite, on affiche les éléments qui ont la classe correspondant au typeChoisi
  let elementsChoisis = document.querySelectorAll("." + typeChoisi);
  afficherElements(elementsChoisis);

}

function cacherElements(elements){
  elements.forEach(function(element,i){
    element.style.display="none";
  });
}

function afficherElements(elements){
  elements.forEach(function(element,i){
    element.style.display="block";
  });
}