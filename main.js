// change text 


 const texts = [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "MERN Stack Developer",
      "React Developer"
    ]; // array of texts
    let textIndex = 0;
    let charIndex = 0;
    const typedText = document.getElementById('text');
    const typingSpeed = 100; // ms
    const erasingSpeed = 50; // ms
    const delayBetweenTexts = 1000; // ms

    function type() {
      if (charIndex < texts[textIndex].length) {
        typedText.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, delayBetweenTexts);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
      }
    }

    type(); 


// change text














const container = document.querySelector(".photo-container");
    const image = container.querySelector(".interactive-3d");

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 30;
      const rotateY = ((x / rect.width) - 0.5) * -30;

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    container.addEventListener("mouseleave", () => {
      image.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });


const contain = document.querySelector(".about-img");
    const imag = contain.querySelector(".interacti-3d");

    contain.addEventListener("mousemove", (e) => {
      const rect = contain.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 30;
      const rotateY = ((x / rect.width) - 0.5) * -30;

      imag.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    contain.addEventListener("mouseleave", () => {
      imag.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });







const circles = document.querySelectorAll('.circle-skill');
  circles.forEach(circle => {
    const percent = +circle.getAttribute('data-percent');
    const progress = circle.querySelector('.circle-progress');
    const text = circle.querySelector('.label span');
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (circumference * percent) / 100;
    
    progress.style.setProperty('--offset', offset + 'px');
    
    let counter = 0;
    const updateCount = setInterval(() => {
      if (counter < percent) {
        counter++;
        text.textContent = counter + "%";
      } else {
        clearInterval(updateCount);
      }
    }, 20);
  });
