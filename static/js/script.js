function stringevent() {
  var finalPath = `M 10 100 Q 500 100 990 100`;

  var finalPath = `M 10 100 Q 500 100 990 100`;

  var string = document.querySelector('#string');
  var path = document.querySelector('#string-line path');

  string.addEventListener('mousemove', function (event) {
    var rect = string.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    y = Math.max(10, Math.min(190, y));
    x = Math.max(10, Math.min(990, x));

    var newPath = `M 10 100 Q ${x} ${y} 990 100`;

    gsap.to(path, {
      attr: { d: newPath },
      duration: 0.1,
      ease: 'power3.out'
    });
  });

  string.addEventListener('mouseleave', function () {
    gsap.to(path, {
      attr: { d: finalPath },
      duration: 0.8,
      ease: "elastic.out(1, 0.2)"
    });
  });
}

function mousetrail() {
  let lastX = null;
  let lastY = null;

  function createDot(x, y) {
    const dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.left = `${x - 8}px`; 
    dot.style.top = `${y - 8}px`; 
    dot.style.width = "3px"; 
    dot.style.height = "3px"; 
    dot.style.borderRadius = "50%"; 
    dot.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; 
    dot.style.pointerEvents = "none"; 
    dot.style.transition = "opacity 0.4s ease-out";
    dot.style.opacity = "1";

   
    if (lastX !== null && lastY !== null) {
      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const size = Math.min(3, distance); 
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
    }

    document.body.appendChild(dot);

    setTimeout(() => {
      dot.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(dot);
      }, 400);
    }, 0);

    lastX = x;
    lastY = y;
  }

  document.addEventListener("mousemove", (event) => {
    const x = event.pageX;
    const y = event.pageY;
    createDot(x, y);
  });
}

function aboutLink() {
  const aboutLink = document.getElementById('About-Link');

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('page5').scrollIntoView({ behavior: 'smooth' });
  });
}

function faqLink() {
  const aboutLink = document.getElementById('faq-Link');

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('page6').scrollIntoView({ behavior: 'smooth' });
  });
}

function contactLink() {
  const aboutLink = document.getElementById('Contact-Link');

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('page7').scrollIntoView({ behavior: 'smooth' });
  });
}

function predictLink() {
  const aboutLink = document.getElementById('predict_button');

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
  });
}

function backtop(){
  document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.getElementById('arrow');
    const page1 = document.getElementById('page1');

    arrow.addEventListener('click', function () {
      page1.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

stringevent()
mousetrail();
aboutLink()
faqLink()
contactLink()
predictLink()
backtop()