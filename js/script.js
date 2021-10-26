function display_ct6() {
    var x = new Date();
    var ampm = x.getHours() >= 12 ? " PM" : " AM";
    hours = x.getHours() % 12;
    hours = hours ? hours : 12;
    var x1 = x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
    var x2 =
        hours +
        ":" +
        x.getMinutes() +
        ":" +
        x.getSeconds() +
        " " +
        ampm;
    document.getElementById("ct6").innerHTML = x1;
    document.getElementById("ct5").innerHTML = x2;
    display_c6();
}
function display_c6() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout("display_ct6()", refresh);
}
display_c6();


function handleMarquee(){
    const marquee = document.querySelectorAll('.marquee');
    let speed = 2;
    let lastScrollPos = 0;
    let timer;
  
    marquee.forEach(function(el){
      // stop animation on mouseenter
      mouseEntered = false;
      document.querySelector('.inner').addEventListener('mouseenter', function() {
        mouseEntered = true;
      })
      document.querySelector('.inner').addEventListener('mouseleave', function() {
        mouseEntered = false
      })
  
      const container = el.querySelector('.inner');
      const content = el.querySelector('.inner > *');
      //Get total width
      const  elWidth = content.offsetWidth;
      
      //Duplicate content
      let clone = content.cloneNode(true);
      container.appendChild(clone);
      
      let progress = 1;
      function loop(){
        if (mouseEntered === false) {progress = progress-speed;} 
        if (progress <= elWidth*-1) {progress=0;}
        container.style.transform = 'translateX(' + progress + 'px)';
        window.requestAnimationFrame(loop);
      }
      loop();
    });
    
    function handleSpeedClear(){
      speed = 4;
    }
  };
  
  handleMarquee();