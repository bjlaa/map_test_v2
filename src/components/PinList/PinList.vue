<template>
  <div class="sideBarPinList">
          <!-- S'il y a un best pin on l'affiche -->
          <div
            v-if="currentEvent.bestPin"
            class="sideBarPinListItemBest"
            @click="selectPin(currentEvent.bestPin.id)"
          >
            <div class="sideBarPinListItemBestTitle">Tonight we go to:</div>
          <PinListItem />
  </div>
</template>

<script>
import PinListItem from './components/PinListItem/PinListItem.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
