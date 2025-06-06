// sponsors section
$(document).ready(function(){
  $('.sponsor-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true
  });
});

// Q & A section

document.getElementById("toggleprev").addEventListener("click", function() {
  let answer = document.getElementById("prev");

  if (answer.style.display === "none") {
      answer.style.display = 'block';
      this.textContent = "▲"
  } else {
      answer.style.display = 'none';
      this.textContent = "▼";
  }
})

document.getElementById("toggleprev1").addEventListener("click", function() {
  let answer = document.getElementById("prev1");

  if (answer.style.display === "none") {
      answer.style.display = 'block';
      this.textContent = "▲"
  } else {
      answer.style.display = 'none';
      this.textContent = "▼";
  }
})


document.getElementById("toggleprev2").addEventListener("click", function() {
  let answer = document.getElementById("prev2");

  if (answer.style.display === "none") {
      answer.style.display = 'block';
      this.textContent = "▲"
  } else {
      answer.style.display = 'none';
      this.textContent = "▼";
  }
})


document.getElementById("toggleprev3").addEventListener("click", function() {
  let answer = document.getElementById("prev3");

  if (answer.style.display === "none") {
      answer.style.display = 'block';
      this.textContent = "▲"
  } else {
      answer.style.display = 'none';
      this.textContent = "▼";
  }
})


// Testimonials section
$(document).ready(function(){
  $('.testimonial-slider').slick({
      slidesToShow: 2,  /* Show 2 testimonials at a time */
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false
  });
});
