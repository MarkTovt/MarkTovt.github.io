'use strict'
const navbar = document.querySelector(".navbar");
const techCard = document.querySelector(".techCard");
const floatingING = document.querySelector("#floatingIMG");
const collapsibleNavbar = document.querySelector("#collapsibleNavbar");
const seeMore = document.querySelector("#seeMoreButt");

//navbar.style.height += navbar.getBoundingClientRect().height;

const requestURL = 'https://MarkTovt.github.io/techs.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


//request.onload = function() {
//  const techs = request.response;
//  createTechCards(techs);
//}

seeMore.addEventListener('click',(e)=>{
    console.log(e.target);
  linkFunc(seeMore.firstElementChild);
});

navbar.addEventListener('click',(e)=>{
  if (e.target.tagName == "A"){
    e.preventDefault();
    linkFunc(e.target.closest('A'));
  }
});

(function floating(){
  floatingIMG.style.transform = 'translateX(20vw)';
})();

function linkFunc(elem){
  let navButton = document.querySelector(".navbar-collapse");

  
  console.log(navButton.style);
  //if(screen.width<768){
  //navButton.classList.add('collapsed');
  //navButton.ariaExpanded = "false";
  //collapsibleNavbar.classList.toggle('show');
  //collapsibleNavbar.classList.remove('collapse');
  //collapsibleNavbar.classList.add('collapsing')
  //}
  let search = document.querySelector(`#${elem.dataset.nav}`);
  let top = search.getBoundingClientRect().top - navbar.clientHeight*1.3 + pageYOffset;
  window.scrollTo(0, top);
}

(function floating(){
  floatingIMG.style.transform = 'translateX(20vw)';
})();
