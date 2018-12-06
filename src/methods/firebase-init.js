export const initFirebase = function() {
  // We initialize Firebase
  const config = {
    apiKey: "AIzaSyA3t1HqYqWLx62jVb8mc1ZuQ_l1pm6FBxI",
    authDomain: "wigot-220414.firebaseapp.com",
    databaseURL: "https://wigot-220414.firebaseio.com",
    projectId: "wigot-220414",
    storageBucket: "wigot-220414.appspot.com",
    messagingSenderId: "1057857701694"
  }
  const self = this
  firebase.initializeApp(config)

  // Here we create a ref to our Firebase DB and store it in the global state
  // Now we can access our database!
  const db = firebase.database()
  this.db = db

  if (this.eventID) {
    this.fetchEvent(this.eventID)
  }

  // If we enabled authentication in the settings then we show the modal
  // with all the buttons to login or sign up
  if (SETTINGS.isAuthEnabled) {
    this.startAuthentication()
  } else {
    // Otherwise we just get the user's location === DEMO/DEV MODE
    self.getLocation()
  }
}