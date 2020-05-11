console.log('This would be the main JS file.');

function getGPSLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
       console.log(position.coords.latitude)
       console.log(position.coords.longitude)
    },
    function (error) {
        console.log("The Locator was denied. :(")
    })
}

window.onload = function() {
  getGPSLocation();
};
