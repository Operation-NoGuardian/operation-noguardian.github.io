// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  window.fullScreenFrame = null;
  // Find all iframe elements with a specific class
  var iframes = document.querySelectorAll('iframe.add-fullscreen-button');
  
  // Iterate over the iframe elements and append a button before each iframe
  for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];

      var image = document.createElement('img')
      image.src = `${window.staticurl}iframe/fullscreen.svg`
      image.width = "50"

      // Create the button element
      var button = document.createElement('button');
      button.innerHTML = image.outerHTML;
      button.classList.add('fullscreen-button'); // Add the specific class
      
      // Insert the button before the iframe
      iframe.insertAdjacentElement('beforebegin', button);

      button.addEventListener('click', function(ev) {
        decideFullscreen(iframe, button, image)
      })
  }
});

function decideFullscreen(frame, button, image=document.createElement('img')) {
  if (window.fullScreenFrame === null) {
    requestFullscreen(frame);
    image.src = `${window.staticurl}iframe/ex;t-fullscreen.svg`
    button.innerHTML=image.outerHTML
  } else if (window.fullScreenFrame === frame) {
    exitFullscreen();
    image.src = `${window.staticurl}iframe/fullscreen.svg`
    button.innerHTML=image.outerHTML;
  } else {
    window.alert("Sorry, right now a different IFrame is in fullscreen.")
  }
}

// Function to request fullscreen
function requestFullscreen(iframe) {
  if (window.fullScreenFrame==null) {
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }
}

// Function to exit fullscreen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}