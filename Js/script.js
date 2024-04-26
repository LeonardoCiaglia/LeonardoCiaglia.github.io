
window.onload = function() {
  typeWriter();
};

// Funzione per  la scrittura del testo
function typeWriter() {
  var i = 0;
  // Ottieni il testo da aggiungere dall'attributo data-text dell'elemento con id "typewriter"
  var text = document.getElementById("typewriter").getAttribute("data-text");

  // Funzione che aggiunge una lettera alla volta al testo
  function addLetter() {
      // Verifica se non abbiamo ancora aggiunto tutte le lettere
      if (i < text.length) {
          // Aggiungi la lettera corrente al contenuto dell'elemento "typewriter"
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

// Funzione per controllare la visibilità del pulsante "Torna all'inizio"
function scrollFunction() {
  // Verifica se la posizione dello scroll verticale è maggiore di 20 pixel
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    // Altrimenti, nascondi il pulsante 
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Funzione per tornare all'inizio della pagina
function topFunction() {
  // Imposta la posizione dello scroll verticale a 0 per tornare all'inizio della pagina
  document.body.scrollTop = 0; // Per Safari
  document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE e Opera
}
