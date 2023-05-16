
// This function is toggling the visibility of certain elements on a webpage related to soccer.

var btnSoccer = document.getElementById("btnSoccer");
var btnMotoring = document.getElementById("btnMotoring");

function showSoccer() {
    window.location.href = "soccer.html"
}

//This function is toggling the visibility of certain elements on a webpage related to motoring.
function showMotoring() {
    window.location.href = "motoring.html";
}

btnSoccer.addEventListener("click", showSoccer);
btnMotoring.addEventListener("click", showMotoring)

    document.getElementById('loadButton').addEventListener('click', function() {
      var savedPage = localStorage.getItem('savedPage');
      if (savedPage) {
        document.open();
        document.write(savedPage);
        document.close();
      } else {
        alert('No saved page found in local storage.');
      }
    });
