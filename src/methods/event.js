import SETTINGS from '../settings'

// Gets the values provided in the create event modal
// and create the event on our firebase backend
export const createEvent = function (eventAuthor, eventName) {
  const self = this

  // Set the name from the value
  this.currentEvent.title = eventName
  this.currentEvent.author = eventAuthor

  this.currentEvent.pins.forEach((pin) => {
    pin.author = eventAuthor
  });

  // Generate an id for the event
  // this is the ID that will be used in the URL bar
  // and generally to refer to the event
  const newEventId = this.generateUUID()

  // Save on Firebase
  this.db.ref('/events/' + newEventId).set(this.currentEvent)
    .then(() => {
      console.log('SUCCESS in createEvent: event created.')
      // Add the id to current event and update the event saved in DB
      self.currentEvent.id = newEventId
      self.updateEvent()

      // We create a cookie that stores useful infos about the current user
      // his name (for later use) and the ids of the pins he has created
      // => we'll use these ids to render or not elements of the DOM (i.e.: the delete pin button)
      self.setCookie(
        `${SETTINGS.cookieNameFirstPart}${newEventId}`,
        {
          user: {
            name: eventAuthor,
            pinsCreated: this.pinsCreated
          }
        },
        100
      )

      // We show the event created modal giving the author of the event the 
      // URL to share to his friends
      this.toggleEventCreatedModal(newEventId)

      this.appState = this.appStates.sharing
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}

export const toggleShareEventModal = function (eventId) {
  this.toggleEventCreatedModal()
}

// Generate ID
// from: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export const generateUUID = function () { // Public Domain/MIT
  let d = Date.now()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

// Fetch event from the DB using the ID provided in the URL
// called when the app launches
export const fetchEvent = function (id) {
  const self = this
  this.db.ref('/events/' + id)
  // Only one value should be returned
    .once('value')
    .then(function (snapshot) {
      const eventFromDB = snapshot.val()

      console.log('SUCCESS in main.js - fetchEvent(): doc.data() ===', eventFromDB)

      // We update the currentEvent object with our fetched data
      self.updateEventFromDB(eventFromDB)
    })
    .catch(function (error) {
      console.log('ERROR in main.js - couldn\'t fetch event.', error)
      // We couldn't retrieve the event (doesn't exist or wrong id)
      // so we 
      self.appState = this.appStates.wigotCreation
    })
}

// Updates the event saved in our DB
export const updateEvent = function () {
  const updates = {}

  updates['/events/' + this.currentEvent.id] = this.currentEvent

  this.db.ref().update(updates)
}

// Updates the event saved in the global VueJS state
// with the data fetched from our backend
export const updateEventFromDB = function(event) {
  const self = this
  // Set this.isUpdatingFromDB => useful to prevent default behaviours
  // in addPin()
  this.isUpdatingFromDB = true

  // Update this.currentEvent
  this.currentEvent = event

  // Add the pins to the map
  if (event.pins && event.pins.length > 0) {
    event.pins.forEach(function(pin, index) {
      self.addPin(pin, false, index)
    })
  } else {
    this.currentEvent.pins = []
  }

  // Once all done we set it back to false to
  // get the default behaviour in addPin()
  this.isUpdatingFromDB = false
}
