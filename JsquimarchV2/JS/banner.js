var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

// Revenir au debut (par la droite)

  if (n > slides.length)
  {
    slideIndex = 1
  }

// Ne pas pouvoir "sortir" par la gauche

if (n < 1)
{
  slideIndex = slides.length
}

// Permet de "cacher" le carousel actuel quand on change d'image

for (i = 0; i < slides.length; i++)
{
    slides[i].style.display = "none";
}

// Pour les 3 points
  for (i = 0; i < dots.length; i++)
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }

// Afficher les image du carousel
  slides[slideIndex - 1].style.display = "block";
  // Afficher les points
  dots[slideIndex - 1].className += " active";
}


// Modal Description

// Selectionne chaque slide et modal

var carprev = document.querySelector('.car__prev');
var carnext = document.querySelector('.car__next')

var slide1 = document.querySelector('.slide-1');
var slide2 = document.querySelector('.slide-2');
var slide3 = document.querySelector('.slide-3');

var modal1 = document.querySelector('.modal-1');
var modal2 = document.querySelector('.modal_2');
var modal3 = document.querySelector('.modal_3');



// Selectionne chaque slide et modal pour faire apparaitre


slide1.addEventListener('click', function() {
    modal1.style.display = 'block';
    close.style.display = 'block';
    carprev.style.display = 'none';
    carnext.style.display = 'none';
});

slide2.addEventListener('click', function() {
    modal2.style.display = 'block';
    close.style.display = 'block';
    carprev.style.display = 'none';
    carnext.style.display = 'none';
});

slide3.addEventListener('click', function() {
    modal3.style.display = 'block';
    close.style.display = 'block';
    carprev.style.display = 'none';
    carnext.style.display = 'none';
});


// CLOSE BUTTON

var close = document.querySelector('.close');

close.addEventListener('click', function() {
  modal1.style.display = '';
  close.style.display = 'none'
  carprev.style.display = 'block';
  carnext.style.display = 'block';
  enlever.style.display = 'inline-block';
});

// SLIDER 2

var close = document.querySelector('.close-2');

close.addEventListener('click', function() {
  modal2.style.display = '';
  close.style.display = 'none'
  carprev.style.display = 'block';
  carnext.style.display = 'block';
  enlever.style.display = 'inline-block';
});

// SLIDER 3


var close = document.querySelector('.close-3');

close.addEventListener('click', function() {
  modal3.style.display = '';
  close.style.display = 'none'
  carprev.style.display = 'block';
  carnext.style.display = 'block';
  enlever.style.display = 'inline-block';
});
