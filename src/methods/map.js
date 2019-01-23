/*
* Map
*/
export const initMap = function (coordinates) {
  // If we have been able to get the coordinates of the user 
  // we center the map on his location
  if (coordinates) {
    this.map = window.L.map('map').setView([coordinates.latitude, coordinates.longitude], 15)
  } else {
    this.map = window.L.map('map').setView([48.857938768171536, 2.3706436157226567], 13)
  }
  
  window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 19,
      // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    }).addTo(this.map)

  // Add the mouse click event listener
  // Need to pass this inside a function === SCOPE ISSUE
  // use the trick below: store this in a variable (usually "self")
  const self = this

  
  this.map.on('click', function (e) {
    // Return if a marker is already in creation
    if (self.markerInCreation) {
      self.cancelPinFromMap()
      self.markerInCreation = false
    }
    // Get the coordinates from Leaflet
    const latlng = self.map.mouseEventToLatLng(e.originalEvent)

    self.saveMarkerInCreation({ coordinates: { latitude: latlng.lat, longitude: latlng.lng } })
  })

  document.getElementById('map').addEventListener('click', () => {
    self.toggleSearchList(false)
  })
}

// Get current position - called by body.onload
export const getLocation = function () {
  const self = this;
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      // success callback: the user has accepted to give his location

      function (position) {
        console.log('SUCCESS in getLocation(): position ===', position)

        // If the map has already been initialized center it on the user's location
        if (self.map) {
          self.centerMap({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        // Else initialize the map
        } else {
          self.initMap({ lat: position.coords.latitude, long: position.coords.longitude })
        }
      },
      // error callback: the user refused to give his location
      function (error) {
        console.log('ERROR in map.js - getLocation():', error)
        // If the map has not already been initialized go ahead and do it
        if (!self.map) {
          self.initMap()
        }
        self.isMissingLocation = true
      }
    )
  } else {
    console.log('ERROR in initApp(): geolocation is not available on this browser.')
  }
}

export const centerMap = function (coords) {
  // Centers on one point only
  if (coords) {
    this.map.setView([coords.latitude, coords.longitude], 15)
  } else {
    // Center on several points
    const arrayOfLatLongsMarkers = []
    this.currentEvent.pins.forEach((pin) => {
      arrayOfLatLongsMarkers.push([pin.coordinates.latitude, pin.coordinates.longitude])
    })

    this.map.fitBounds(arrayOfLatLongsMarkers, { maxZoom: 14 })
  }
}
