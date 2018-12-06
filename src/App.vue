<template>
  <div id="app">
    <Modal />
    <Map />
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
    centerMap

    /*
    * Firebase
    */
    initFirebase,

    /*
    * Event
    */

  }
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
