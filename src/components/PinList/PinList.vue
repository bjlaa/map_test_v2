<template>
  <div class="pinList">
    <!-- S'il y a un best pin on l'affiche -->
    <!--div
      v-if="currentEvent.pins.length"
      class="pinListItemBest"
      @click="selectPin(currentEvent.bestPin.id)"
    -->
      <PinListItem
        v-for='(pin, index) in currentEvent.pins'
        :pin='pin'
        :index='index'
        :key='pin.title'
        v-bind='{ currentEvent, increaseScorePin, deletePin, selectPin }'
      />
    <!--/div-->
  </div>
</template>

<script>
import PinListItem from '../PinListItem/PinListItem.vue'

export default {
  name: 'PinList',
  components: {
    PinListItem
  },
  props: {
    currentEvent: Object,
    increaseScorePin: Function,
    deletePin: Function,
    selectPin: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.pinList {
  background: #FAFAFA;
  padding: 10px;
  border-radius: 3px;
  max-height: calc(100% - 220px);
}
</style>
