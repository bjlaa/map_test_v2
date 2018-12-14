<template>
  <div
    ref="map"
    id='map'
    class="map"
  ></div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
/*
* Map
*/
.map
  height: 100vh!important
  width: 100%
  position: absolute
  top: 0
  left: 0
  z-index: -1
  
/*
* Leaflet mod
*/
.leaflet-top
  top: auto!important
  left: auto!important
  bottom: 30px
  right: 380px

.leaflet-control-zoom
  border-radius: 5px!important
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)!important
  overflow: hidden
  border: solid 1px lightgrey!important

</style>
