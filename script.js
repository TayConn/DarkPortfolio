let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  let githubLink = dots[slideIndex-1].dataset.github;
  let liveLink = dots[slideIndex-1].dataset.live;

  dots[slideIndex-1].className += " active";
  captionText.innerHTML = `${dots[slideIndex-1].alt} <br/>
  <a class="galleryLink" title="click here to view this project on github" href="${githubLink}"><i class="fab fa-github"></i> View Github</a> | <a class="galleryLink" title="click here to view this project live" href="${liveLink}"><i class="fas fa-external-link-alt"></i> View live site</a>`;
  
} 