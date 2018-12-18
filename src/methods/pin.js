import PinInfobox from '../components/PinInfobox/PinInfobox.js'
import PinCreationInfobox from '../components/PinCreationInfobox/PinCreationInfobox.js'
import icon from '../assets/markerIcon.png'
import shadowIcon from '../assets/marker-shadow.png'

// Utilisé par la map:
// on créé et sauvegarde le pin dans this.markerInCreation
export const saveMarkerInCreation = function (data) {
  // Condition nombre pins (3 max ou 1 max selon si en création ou en mode shared)
  if (this.checkIfOverLimitNumberPins()) return;

  var lat = data.coordinates.latitude.toString();
  var lng = data.coordinates.longitude.toString();

  var myIcon = L.icon({
      iconUrl: icon,
      iconSize: [40, 40],
      iconAnchor: [21, 75],
      popupAnchor: [-3, -76],
      shadowUrl: shadowIcon,
      shadowSize: [40, 60],
      shadowAnchor: [15, 94] 
  });

  var newMarker = new L.marker([lat, lng], { riseOnHover: true, icon: myIcon }).addTo(this.map);

  var popupCreation = new L.popup({
    closeButton: false
  })
  .setContent(PinCreationInfobox)

  newMarker.bindPopup(popupCreation).openPopup();

  this.markerInCreation = newMarker;
}

export const createPinFromMap = function (data) {
  this.addPin(data, this.markerInCreation);
}

export const cancelPinFromMap = function () {
  if (this.markerInCreation) {
    this.map.removeLayer(this.markerInCreation);
  }
}

export const addPin = function (data, markerInCreation, index) {
  // Condition nombre pins (3 max ou 1 max selon si en création ou en mode shared)
  if (this.checkIfOverLimitNumberPins()) return;

  var newMarker;
  var lat;
  var lng;

  // On a cliqué sur la carte on se sert du marker créé pour 
  // créer notre pin dans le state global
  if (markerInCreation) {
    newMarker = markerInCreation;
    lat = newMarker._latlng.lat;
    lng = newMarker._latlng.lng;
  // sinon on se sert des data fournies par Yelp API
  } else {
    lat = data.coordinates.latitude.toString();
    lng = data.coordinates.longitude.toString();

    var myIcon = L.icon({
        iconUrl: icon,
        iconSize: [40, 40],
        iconAnchor: [21, 75],
        popupAnchor: [-3, -76],
        shadowUrl: shadowIcon,
        shadowSize: [40, 60],
        shadowAnchor: [15, 94] 
    });

    // et on crée le marker
    newMarker = new L.marker([lat, lng], { icon: myIcon }).addTo(this.map);
  }

  // On clear notre this.markerInCreation pour le prochain click
  this.markerInCreation = false;
  

  // On ferme la liste mais on garde les résultats
  this.isSearchResultsOpen = false;

  // On sauvegarde une reférence vers le marker pour pouvoir le supprimer plus tard
  // en utilisant l'id générée par LeafletJS, que l'on sauvegarde ci-dessous
  this.markers.push(newMarker);

  var newPin = {
    // Sauvegarde l'id
    id: newMarker._leaflet_id,
    score: 0,
    coordinates: {
      latitude: lat,
      longitude: lng
    }
  };

  // Data Yelp API 
  // OU
  // data fournie par l'utilisateur dans le popup de création de marker
  if (data && data.name) {
    newPin.name = data.name;
  }
  if (data && data.location) {
    newPin.address = data.location.address1;
    newPin.city = data.location.city;    
  }
  if (data && data.image_url) {
    newPin.image = data.image_url;
  }

  if (data && data.image) {
    newPin.image = data.image;
  }
  // Data fournie par l'utilisateur dans le popup de création de marker
  if (data && data.address) {
    newPin.address = data.address;
  }
  if (data && data.price) {
    newPin.price = data.price;
  }
  if (data && data.rating) {
    newPin.rating = data.rating;
  }
  if (data && data.categories) {
    newPin.categories = data.categories;
  }

  if (this.currentUser) {
    newPin.author = this.currentUser;
  }

  // Bind new popup content and show it
  const newContent = PinInfobox(newPin, index ? index : this.currentEvent.pins.length);
  newMarker.bindPopup(newContent).openPopup();

  var self = this;

  newMarker.on('mouseover', function(e) {        
    this.openPopup();
  });
  
  this.setBestPin();

  // Uniquement si on est pas en train de créer les pins 
  // après un fetchEvent()
  if (!this.isUpdatingFromDB) {
    // Ajoute le pin au currentEvent
    this.currentEvent.pins.push(newPin);
    // Ajoute l'id du pin créé aux pinsCreated
    this.pinsCreated.push(newPin.id);
    // Recentre la map sur les pins
    this.centerMap({
      latitude: lat,
      longitude: lng
    });
    // Message de confirmation de création de pin
    // this.showPinAddedMessage();


    // Uniquement si on est en mode shared
    if (this.appState === this.appStates.sharing) {

      // Update l'event dans Firebase
      this.updateEvent();
      // Update le cookie stocké
      this.updateCookie();
    }      
  } else {
    this.currentEvent.pins[index].id = newMarker._leaflet_id;
    this.centerMap({ latitude: lat, longitude: lng });
  }
}

// Vote pour un pin
export const increaseScorePin = function (index) {
  console.log('index',index)
  if (this.pinsVoted.indexOf(this.currentEvent.pins[index].id) > -1) {
    return;
  }

  // Update the score
  this.currentEvent.pins[index].score += 1;

  // Store the id of the pin in order to prevent revoting for the same pin
  this.pinsVoted.push(this.currentEvent.pins[index].id);


  if (this.currentEvent.pins.length > 1) {
    this.setBestPin();
  }

  if (this.appState === this.appStates.sharing) {
    this.updateEvent();
  }
}

export const decreaseScorePin = function (index, pinId) {
  if (this.pinsVoted.indexOf(this.currentEvent.pins[index].id) < -1) {
    return;
  }
  // Decrease the score
  this.currentEvent.pins[index].score -= 1;

  // REmove the id
  const indexToRemove = this.pinsVoted.indexOf(this.currentEvent.pins[index].id);
  this.pinsVoted.splice(indexToRemove, 1);

  if (this.currentEvent.pins.length > 1) {
    this.setBestPin();
  }

  if (this.appState === this.appStates.sharing) {
    this.updateEvent();
  }
}

// Détermine le meilleur pins === celui avec le plus haut score
export const setBestPin = function () {
  // Pas de pins créé
  if (this.currentEvent.pins.length <= 0) {
    return
  }
  // On vérifie si le score total n'est pas égal à zéro
  // si oui pas besoin de set le meilleur pin => on return
  var isAllScoreZero = 0;
  this.currentEvent.pins.forEach((pin) => {
    isAllScoreZero += pin.score
  });
  // !isAllScoreZero <=> isAllScoreZero === 0
  if (!isAllScoreZero) return


  var arrayPins = Array.from(this.currentEvent.pins);
  arrayPins.sort((x, y) => {
    var score1 = x.score;
    var score2 = y.score;

    if (score1 > score2) return -1;

    if (score1 < score2) return 1;

    if (score1 == score2) return 0;
  });

  this.currentEvent.bestPin = Object.assign({}, arrayPins[0]);
  this.currentEvent.pins = arrayPins;
}

// Delete pin both in global state and on the map
export const deletePin = function (index) {
  // Delete map Marker
  this.map.removeLayer(this.markers[index])

  // Delete reference id saved in this.pinsCreated
  var pinToDelete = this.currentEvent.pins[index]
  var indexToDelete = this.pinsCreated.indexOf(pinToDelete.id)
  this.pinsCreated.splice(indexToDelete, 1)

  // Delete pin in event object
  this.currentEvent.pins.splice(index, 1)
  this.markers.splice(index, 1)


  this.setBestPin()

  if (this.appState === this.appStates.sharing) {
    this.updateEvent()
    this.updateCookie()
  }
}

export const selectPin = function (pinId) {
  var selectedPin = this.currentEvent.pins.filter(pin => pin.id === pinId)[0]

  if (selectedPin) {
    this.selectedPin = selectedPin
  }

  var selectedMarker = this.markers.filter(marker => marker._leaflet_id === pinId)[0]

  if (selectedMarker) {
    selectedMarker.openPopup()
    this.centerMap({ latitude: selectedMarker._latlng.lat, longitude: selectedMarker._latlng.lng })
  }
}
