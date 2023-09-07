// Function to animate the title
const words = ['procrastinating', 'scrolling', 'netflixing'];
  const titleElement = document.querySelector('.animated_title');
  let wordIndex = 0;
  let letterIndex = 0;

  function animateTitle() {
    if (letterIndex < words[wordIndex].length) {
      titleElement.textContent += words[wordIndex][letterIndex];
      letterIndex++;
      setTimeout(animateTitle, 100);
    } else {
      setTimeout(function () {
        titleElement.textContent = '';
        letterIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        animateTitle();
      }, 500); // Wait for 1 second before moving to the next word
    }
  }

  animateTitle()