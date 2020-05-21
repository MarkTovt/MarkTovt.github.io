const navbar = document.querySelector("#navbar");
const sticky = navbar.offsetTop;
const requestURL = 'https://MarkTovt.github.io/blob/master/techs.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const techs = request.response;

console.log(techs);
}
window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

function createTechCards(technologies){
  const { name, image, description } = technologies;
  const card = `
    <img src="${image}"></img>
    <h3>${name}</h3>
    <p>${description}</p>
  `;
  techCard.innerHTML( card);
}

function init(){
  
    console.log('hello');
  
}
init();

/* Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var i = 0;

var testDiv = document.querySelectorAll("div.techKnoledge p");

function displayContent(){  
  testDiv[i].classList.add("transform");
  i = (i==testDiv.length-1) ? 0 : i+1;
  testDiv[i].classList.remove("transform");
}

function displayContentReverse(){
  testDiv[i].classList.add("transform");
  i = (i==0) ? testDiv.length-1 : i-1;
  testDiv[i].classList.remove("transform");
}

document.getElementById("lButton").addEventListener("click", displayContentReverse);
document.getElementById("rButton").addEventListener("click", displayContent);*/