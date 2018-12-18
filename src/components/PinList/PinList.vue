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
.pinListItemBest {
  background: #69d18b;
  border-radius: 3px;
  color: white;
  padding-top: 5px;
  transition: background 0.2s ease-in-out;
}
.pinListItemBest:hover {
  background: #5ebc7d;
}
.pinListItemBest .pinListItem:hover {
  background: none;
}
.pinListItemBestTitle {
  margin-left: 10px;
  font-size: 8pt;
}
.pinListItemBest .pinListItem {
  border-bottom: none;
}
.pinListItemBest .pinListItemName {
  color: white;
  font-size: 12pt;
  display: flex;
  align-items: center;
}
.pinListItemBest .pinListItemLikeButton {
  color: white;
} 
.pinListItemBest .pinListItemIcon {
  width: 50px;
  margin-top: -15px;
}
.pinListItemBest .pinListItemName {
  font-size: 15pt;
}
</style>
