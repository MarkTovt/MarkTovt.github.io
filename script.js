'use strict'

const navbar = document.querySelector("#navbar");
const sticky = navbar.offsetTop;
const techCard = document.querySelector(".techCard");
const requestURL = 'https://MarkTovt.github.io/techs.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const techs = request.response;
  createTechCards(techs);
  console.log(techs[0]['name']);
}
window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let increment = 0;

function createTechCards(jsonObj){
  const myH1 = document.createElement('h3');
  const techImage = document.createElement('img');
  const techDescription = document.createElement('p');
  myH1.textContent = jsonObj[increment]['name'];
  techImage.src = jsonObj[increment]['image'];
  techDescription.textContent = jsonObj[increment]['description'];
  techCard.appendChild(myH1);
  techCard.appendChild(techImage);
  techCard.appendChild(techDescription);
}