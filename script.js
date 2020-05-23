'use strict'

const navbar = document.querySelector("#navbar");
const sticky = navbar.offsetTop;
const techCard = document.querySelector(".techCard");
const buttonUp = document.querySelector(".buttonUp");
const buttonDown = document.querySelector(".buttonDown");

const requestURL = 'https://MarkTovt.github.io/techs.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

request.onload = function() {
  const techs = request.response;
  createTechCards(techs);
}

function createTechCards(jsonObj){
  for (var i = 0; i < jsonObj.length; i++) {
    const myArticle = document.createElement('article');
    const myH1 = document.createElement('h4');
    const techDescription = document.createElement('p');
    myH1.textContent = jsonObj[i].name;
    techDescription.textContent = jsonObj[i].description + '\n';
    myArticle.appendChild(myH1);
    const techsImages = jsonObj[i].image;
    if (typeof(techsImages) == "string") {
      const techImage = document.createElement('img');
      techImage.src = jsonObj[i].image;
      myArticle.appendChild(techImage);
    } else {
      const techImage = document.createElement('section');
      for (var j = 0; j<techsImages.length; j++) {
        const images = document.createElement('img');
        images.src = jsonObj[i]['image'][j];
        techImage.appendChild(images);
      }
    myArticle.appendChild(techImage);
    }
    myArticle.appendChild(techDescription);
    techCard.appendChild(myArticle);
  }
}