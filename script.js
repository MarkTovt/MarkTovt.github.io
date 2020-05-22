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
  console.log(techs.length);
  createTechCards(techs);
}

function createTechCards(jsonObj){
  for (var i = 0; i < jsonObj.length; i++) {
    const myArticle = document.createElement('article');
    const myH1 = document.createElement('h4');
    const techImage = document.createElement('img');
    const techDescription = document.createElement('p');
    myH1.textContent = jsonObj[i]['name'];
    techImage.src = jsonObj[i]['image'];
    techDescription.textContent = jsonObj[i]['description'] + '\n';
    myArticle.appendChild(myH1);
    myArticle.appendChild(techImage);
    myArticle.appendChild(techDescription);
    
    techCard.appendChild(myArticle);
  }
}