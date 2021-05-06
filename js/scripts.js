console.log("Hi. I'm Josh. Welcome to my site!");

/*function menuToggle() {
  var x = document.getElementById('myNavtoggle');
}*/

/*function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  x.className += 'responsive';
}*/

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-133px";
  }
  prevScrollpos = currentScrollPos;
}
