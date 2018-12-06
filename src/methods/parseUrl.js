/*
* Determines whether or not to show the landing
* or to fetch the data
*/
export const parseURL = function() {
  const currentURL = window.location.href

  const match = currentURL.match(/id=([^&]+)/)

  const self = this
  if (match) {
    // Switch to share mode: le mec a partagé son event
    this.appState = this.appStates.sharing

    // Store the ID in the state
    this.eventID = match[1]
    const cookie = this.getCookie(`${SETTINGS.cookieNameFirstPart}${this.eventID}`)

    if (cookie && cookie.user) {
      this.currentUser = cookie.user.name
      this.pinsCreated = cookie.user.pinsCreated
    }
  } else {
    // If no ID is passed in the URL then we are in create mode
    // we show the create button: the idea is not to create an entry in the database 
    // each time a dude visits the app but only after he is sure he wants to create a wigot
    this.appState = this.appStates.wigotCreation
  }
}
