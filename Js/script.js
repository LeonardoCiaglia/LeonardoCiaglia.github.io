
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
        setTimeout(addLetter, 150);
      }
    }
  
    addLetter();
}
