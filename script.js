document.addEventListener("click", function() {
    var audio = document.getElementById("background-audio");
    audio.play();
  });

  const textElement = document.getElementById('text');
        const words = textElement.innerText.split(' ');
        textElement.innerHTML = ''; // Clear the text content

        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + '\xa0'; // Add a non-breaking space to keep the words separated
            span.className = 'word';
            textElement.appendChild(span);
        });