// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  window.fullScreenFrame = null;
  // Find all iframe elements with a specific class
  var iframes = document.querySelectorAll('iframe.add-fullscreen-button');
  
  // Iterate over the iframe elements and append a button before each iframe
  for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      var frame_clone=iframe.cloneNode(true)
      var frame_styles=window.getComputedStyle(frame_clone);

      var image = document.createElement('img')
      image.src = `${window.staticurl}iframe/fullscreen.svg`
      image.width = "50"

      // Create the button element
      var button = document.createElement('button');
      button.innerHTML = image.outerHTML;
      button.classList.add('fullscreen-button'); // Add the specific class

      var container = document.createElement('div');
      container.classList.add("fullscreen-button-frame-container")
      container.appendChild(frame_clone)
      container.style.height=frame_styles['height'];
      container.style.width=frame_styles['width'];

      // Insert the button before the iframe
      frame_clone.insertAdjacentElement('beforebegin', button);
      iframe.replaceWith(container)

      button.addEventListener('click', function(ev) {
        decideFullscreen(container, button, image)
      })
  }
});

function decideFullscreen(frame, button, image=document.createElement('img')) {
  if (window.fullScreenFrame === null) {
    requestFullscreen(frame);
    image.src = `${window.staticurl}iframe/exit-fullscreen.svg`
    button.innerHTML=image.outerHTML
    window.fullScreenFrame = frame
  } else if (window.fullScreenFrame === frame) {
    exitFullscreen();
    image.src = `${window.staticurl}iframe/fullscreen.svg`
    button.innerHTML=image.outerHTML;
    window.fullScreenFrame = null
  } else {
    window.alert("Sorry, right now a different IFrame is in fullscreen.")
  }
}

// Function to request fullscreen
function requestFullscreen(element) {
  if (window.fullScreenFrame==null) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
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