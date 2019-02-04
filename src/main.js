import Vue from 'vue'

import App from './App.vue'
import './styles.styl'
// import store from './store'
// import './registerServiceWorker'

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

Vue.config.productionTip = false

window.vm = new Vue({
  // store,
  methods: {
    parseURL,
    
    // Map
    initMap,
    getLocation,
    centerMap,

    // Firebase
    initFirebase,

    // Event
    createEvent,
    generateUUID,
    fetchEvent,
    updateEvent,
    updateEventFromDB,

    // Modal
    toggleModal,
    toggleCreateEventModal,
    toggleShareEventModal,
    toggleEventCreatedModal,
    toggleGetUsernameModal,

    // Cookies
    setCookie,
    getCookie,
    eraseCookie,
    saveUsername,
    updateCookie,

    // Yelp
    searchYelpAPI,
    updateSearchInputValue,

    // Pin
    saveMarkerInCreation,
    createPinFromMap,
    cancelPinFromMap,
    addPin,
    increaseScorePin,
    decreaseScorePin,
    setBestPin,
    deletePin,
    selectPin,

    // Helpers
    toggleSearchList,
    checkIfOverLimitNumberPins
  },
  data: {
    /*
    * The state of the app:
    * 1 - there is no ID passed in the URL we launch the app in creation mode
    * 2 - there is an ID passed we hide the button create wigot as the event is
    * already stored in our DB
    */
    appStates: {
      wigotCreation: 1,
      sharing: 2
    },
    // Par défault on set l'app en mode creation
    appState: 1,

    /*
    * Everything relative to the event currently in progress must be stored in this
    * object. We will save this object in our database and fetch it when a user will
    * access https://wigot.com?id=ID_OF_MY_WIGOT
    */
    currentEvent: {
      title: '',
      pins: [],
      bestPin: false
    },

    markers: [],

    // Ici on sauvegarde une référence vers la map
    // qui nous servira pour toutes les manipulations que l'on aura besoin de faire
    map: false,

    // This is the value of the search input it is updated in realtime
    searchInputValue: '',
    isSearchLoading: false,
    // On stocke les résultats de la recherche ici
    searchResults: false,
    // Ouvre / ferme la liste si true / false
    isSearchResultsOpen: false,

    // Ici on va stocker le nombre de pins créés
    // et c'est en utilisant cette valeur qu'on va déterminer si
    // l'utilisateur a déjà créé le nombre de pins auquel il a le droit
    pinsCreated: [],

    // We'll use this variable to display a discreet modal inviting
    // the user to try and give his location again
    isMissingLocation: false,

    // We'll store our DB in here
    db: false,

    // Firebase Auth UI
    authUI: false,

    // Nous permet de bypasser la limite de pins qd on fetch un event
    isUpdatingFromDB: false,

    pinsVoted: [],

    modalContent: false,
    isShowingModalCloseButton: true
  },
  render: function (h) {
    return h(App, {
      props: {
        parseURL: this.parseURL,
        
        // Map
        initMap: this.initMap,
        getLocation: this.getLocation,
        centerMap: this.centerMap,

        // Firebase
        initFirebase: this.initFirebase,

        // Event
        createEvent: this.createEvent,
        generateUUID: this.generateUUID,
        fetchEvent: this.fetchEvent,
        updateEvent: this.updateEvent,
        updateEventFromDB: this.updateEventFromDB,

        // Modal
        toggleModal: this.toggleModal,
        toggleCreateEventModal: this.toggleCreateEventModal,
        toggleShareEventModal: this.toggleShareEventModal,
        toggleEventCreatedModal: this.toggleEventCreatedModal,
        toggleGetUsernameModal: this.toggleGetUsernameModal,

        // Cookies
        setCookie: this.setCookie,
        getCookie: this.getCookie,
        eraseCookie: this.eraseCookie,
        saveUsername: this.saveUsername,
        updateCookie: this.updateCookie,

        // Yelp
        searchYelpAPI: this.searchYelpAPI,
        updateSearchInputValue: this.updateSearchInputValue,

        // Pin
        saveMarkerInCreation: this.saveMarkerInCreation,
        createPinFromMap: this.createPinFromMap,
        cancelPinFromMap: this.cancelPinFromMap,
        addPin: this.addPin,
        increaseScorePin: this.increaseScorePin,
        decreaseScorePin: this.decreaseScorePin,
        setBestPin: this.setBestPin,
        deletePin: this.deletePin,
        selectPin: this.selectPin,

        // Helpers
        toggleSearchList: this.toggleSearchList,
        checkIfOverLimitNumberPins: this.checkIfOverLimitNumberPins,

        /*
        * The state of the app:
        * 1 - there is no ID passed in the URL we launch the app in creation mode
        * 2 - there is an ID passed we hide the button create wigot as the event is
        * already stored in our DB
        */
        appStates: this.appStates,
        // Par défault on set l'app en mode creation
        appState: this.appState,

        /*
        * Everything relative to the event currently in progress must be stored in this
        * object. We will save this object in our database and fetch it when a user will
        * access https://wigot.com?id=ID_OF_MY_WIGOT
        */
        currentEvent: this.currentEvent,

        markers: this.markers,

        // Ici on sauvegarde une référence vers la map
        // qui nous servira pour toutes les manipulations que l'on aura besoin de faire
        map: this.map,

        // This is the value of the search input it is updated in realtime
        searchInputValue: this.searchInputValue,
        isSearchLoading: this.isSearchLoading,
        // On stocke les résultats de la recherche ici
        searchResults: this.searchResults,
        // Ouvre / ferme la liste si true / false
        isSearchResultsOpen: this.isSearchResultsOpen,

        // Ici on va stocker le nombre de pins créés
        // et c'est en utilisant cette valeur qu'on va déterminer si
        // l'utilisateur a déjà créé le nombre de pins auquel il a le droit
        pinsCreated: this.pinsCreated,

        // We'll use this variable to display a discreet modal inviting
        // the user to try and give his location again
        isMissingLocation: this.isMissingLocation,

        // We'll store our DB in here
        db: this.db,

        // Firebase Auth UI
        authUI: this.authUI,

        // Nous permet de bypasser la limite de pins qd on fetch un event
        isUpdatingFromDB: this.isUpdatingFromDB,

        pinsVoted: this.pinsVoted,

        modalContent: this.modalContent,
        isShowingModalCloseButton: this.isShowingModalCloseButton
      }
    })
  }
}).$mount('#app')
