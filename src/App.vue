<template>
  <div id="app">
    <Modal v-bind="{ modalContent, toggleModal, isShowingModalCloseButton }" />
    <Map v-bind="{ initMap }"/>
  </div>
</template>

<script>
import Modal from './components/Modal/Modal.vue'
import Map from './components/Map/Map.vue'

// Methods
import { initMap, getLocation, centerMap } from './methods/map'
import { initFirebase } from './methods/firebase-init'
import {
  createEvent,
  toggleCreateEventModal,
  toggleShareEventModal,
  generateUUID,
  fetchEvent,
  updateEvent,
  updateEventFromDB
} from './methods/event'
import { toggleModal } from './methods/modal'

export default {
  name: 'app',
  components: {
    Modal,
    Map
  },
  methods: {
    /*
    * Map part
    */
    initMap,
    getLocation,
    centerMap,

    /*
    * Firebase
    */
    initFirebase,

    /*
    * Event
    */
    createEvent,
    toggleCreateEventModal,
    toggleShareEventModal,
    generateUUID,
    fetchEvent,
    updateEvent,
    updateEventFromDB,

    /*
    * Modal
    */
    toggleModal,
  },
  data: () => ({
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

    // On stocke les résultats de la recherche ici
    searchResults: false,

    // Ouvre / ferme la liste si true / false
    isSearchResultsOpen: false,

    // Nous permet de bypasser la limite de pins qd on fetch un event
    isUpdatingFromDB: false,

    pinsVoted: [],

    modalContent: true,
    isShowingModalCloseButton: true
  }),
};

</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
