
window.onload = function() {
  typeWriter();
};

function typeWriter() {
  var i = 0;
  var text = document.getElementById("typewriter").getAttribute("data-text");

  function addLetter() {
      if (i < text.length) {
          document.getElementById("typewriter").innerHTML += text.charAt(i);
          i++;

          setTimeout(addLetter, 200);
      }
  }

  addLetter();
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Per Safari
  document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE e Opera
}
