<template>
  <div id="app">
    <Modal v-bind="{ modalContent, toggleModal, isShowingModalCloseButton, currentEvent }" />
    <Map v-bind="{ initMap }"/>
    <SearchBar v-bind='{ searchYelpAPI, cancelPinFromMap, toggleSearchList, searchInputValue, updateSearchInputValue, isSearchLoading }' />
    <SearchResults v-bind='{ searchInputValue, isSearchResultsOpen, searchResults, addPin }' />
    <SideBar v-bind='{ currentEvent, increaseScorePin, deletePin, selectPin, appStates, appState, toggleShareEventModal, toggleCreateEventModal }'/>
  </div>
</template>

<script>
import Modal from './components/Modal/Modal.vue'
import Map from './components/Map/Map.vue'
import SearchBar from './components/SearchBar/SearchBar.vue'
import SearchResults from './components/SearchResults/SearchResults.vue'
import SideBar from './components/SideBar/SideBar.vue'

// Methods
import { initMap, getLocation, centerMap } from './methods/map'
import { initFirebase } from './methods/firebase-init'
import { parseURL } from './methods/parseUrl'
import { createEvent, generateUUID, fetchEvent, updateEvent, updateEventFromDB } from './methods/event'
import { toggleModal, toggleCreateEventModal, toggleEventCreatedModal, toggleShareEventModal, toggleGetUsernameModal } from './methods/modal'
import { setCookie, getCookie, eraseCookie, saveUsername, updateCookie } from './methods/cookies'
import { searchYelpAPI, updateSearchInputValue } from './methods/yelp'
import { saveMarkerInCreation, createPinFromMap, cancelPinFromMap, addPin, increaseScorePin, decreaseScorePin, setBestPin, deletePin, selectPin } from './methods/pin'
import { toggleSearchList, checkIfOverLimitNumberPins } from './methods/helpers'

export default {
  name: 'app',
  components: {
    Modal,
    Map,
    SearchBar,
    SearchResults,
    SideBar
  },
  /*
  * Call this before mount
  */
  beforeMount() {
    // Parse l'URL actuelle
    this.parseURL()
  },

  mounted() {
    // Si lors de parseURL() on a récupéré l'ID de l'évènement
    // et
    // s'il n'y avait pas d'utilisateur stocké dans les cookies
    // on propose à l'utilisateur de choisir son nom dans un modal
    if (this.eventID && !this.currentUser) {
      this.toggleGetUsernameModal()
    }

    // On initialise firebase (DB)
    this.initFirebase()
    // On initialise la map
    this.initMap()


    // Utile: quand on clique sur le background semi-opaque derrière le modal
    // on ferme le modal
    const self = this;
    document.getElementById('modalBackground').addEventListener('click', function () {
      self.toggleModal(false)
    })
  },
  props: {
    parseURL: Function,
    
    // Map
    initMap: Function,
    getLocation: Function,
    centerMap: Function,

    // Firebase
    initFirebase: Function,

    // Event
    createEvent: Function,
    generateUUID: Function,
    fetchEvent: Function,
    updateEvent: Function,
    updateEventFromDB: Function,

    // Modal
    toggleModal: Function,
    toggleCreateEventModal: Function,
    toggleShareEventModal: Function,
    toggleEventCreatedModal: Function,
    toggleGetUsernameModal: Function,

    // Cookies
    setCookie: Function,
    getCookie: Function,
    eraseCookie: Function,
    saveUsername: Function,
    updateCookie: Function,

    // Yelp
    searchYelpAPI: Function,
    updateSearchInputValue: Function,

    // Pin
    saveMarkerInCreation: Function,
    createPinFromMap: Function,
    cancelPinFromMap: Function,
    addPin: Function,
    increaseScorePin: Function,
    decreaseScorePin: Function,
    setBestPin: Function,
    deletePin: Function,
    selectPin: Function,

    // Helpers
    toggleSearchList: Function,
    checkIfOverLimitNumberPins: Function,

    /*
    * The state of the app:
    * 1 - there is no ID passed in the URL we launch the app in creation mode
    * 2 - there is an ID passed we hide the button create wigot as the event is
    * already stored in our DB
    */
    appStates: Object,
    // Par défault on set l'app en mode creation
    appState: Number,

    /*
    * Everything relative to the event currently in progress must be stored in this
    * object. We will save this object in our database and fetch it when a user will
    * access https://wigot.com?id=ID_OF_MY_WIGOT
    */
    currentEvent: Object,

    markers: Array,

    // Ici on sauvegarde une référence vers la map
    // qui nous servira pour toutes les manipulations que l'on aura besoin de faire
    map: [Object, Boolean],

    // This is the value of the search input it is updated in realtime
    searchInputValue: String,
    isSearchLoading: Boolean,
    // On stocke les résultats de la recherche ici
    searchResults: [Boolean, Array],
    // Ouvre / ferme la liste si true / false
    isSearchResultsOpen: Boolean,

    // Ici on va stocker le nombre de pins créés
    // et c'est en utilisant cette valeur qu'on va déterminer si
    // l'utilisateur a déjà créé le nombre de pins auquel il a le droit
    pinsCreated: Array,

    // We'll use this variable to display a discreet modal inviting
    // the user to try and give his location again
    isMissingLocation: Boolean,

    // We'll store our DB in here
    db: [Boolean, Object],

    // Firebase Auth UI
    authUI: [Boolean, Object],

    // Nous permet de bypasser la limite de pins qd on fetch un event
    isUpdatingFromDB: Boolean,

    pinsVoted: Array,

    modalContent: [Boolean, Object],
    isShowingModalCloseButton: Boolean
  }
};

</script>
<style lang="stylus">
img
    max-width 100%
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
