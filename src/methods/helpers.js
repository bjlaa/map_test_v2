export const toggleSearchList = function (value) {
  this.isSearchResultsOpen = value
}

export const checkIfOverLimitNumberPins = function () {
  // Restriction: max 3 pins when creating event
  if (/*this.appState === this.appStates.wigotCreation && */this.pinsCreated.length >= 3 && !this.isUpdatingFromDB) {
    alert('Max pins quota reached!');
    return true
  }
  /*
  // Restriction: max 1 pin when not creating event
  if (this.appState ===  this.appStates.sharing && this.pinsCreated.length >= 1 && !this.isUpdatingFromDB) {
    alert('Max pins quota reached!');
    return true
  } */
}

