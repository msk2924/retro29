document.addEventListener("click", function() {
    var audio = document.getElementById("background-audio");
    audio.play();
  });

  const textElement = document.getElementById('text');
        const words = textElement.innerText.split(' ');
        textElement.innerHTML = ''; 

        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + '\xa0'; 
            span.className = 'word';
            textElement.appendChild(span);
        });
