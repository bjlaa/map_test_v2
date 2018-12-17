<template>
  <div class="sideBarPinListItem">
    <div class="sideBarPinListItemIcon">
      <img
        class="sideBarPinListItemIconImage"
        src="../../assets/beers.png"
      >
    </div>
    <div class="sideBarNameAuthor">
      <div class="sideBarPinListItemName">{{ currentEvent.bestPin.name }}</div>
      <div v-if='currentEvent.bestPin.author' class="sideBarPinListItemAuthor">suggested by {{ currentEvent.bestPin.author }}</div>                
    </div>
    <button
      @click="increaseScorePin(0)"
      class="sideBarPinListItemLikeButton"
    >
      <i class="fas fa-heart"></i>
      <span
        v-show="currentEvent.pins[0].score > 0"
      >{{ currentEvent.bestPin.score ? currentEvent.bestPin.score : null}}</span>
    </button>
    <button
      @click="deletePin(index)"
      class="sideBarPinListItemDeleteButton"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
  <!-- S'il y a un best pin on retire le premier pin de la liste à afficher -->
  <!--div
    v-if="currentEvent.pins.length > 0 && currentEvent.bestPin"
    v-for="(pin, index) in Array.from(currentEvent.pins).splice(1, currentEvent.pins.length - 1)"
    class="sideBarPinListItem"
    @click="selectPin(pin.id)"
  >
    <div class="sideBarPinListItemIcon">
      <img
        class="sideBarPinListItemIconImage"
        src="./assets/markerIcon.png"
      >
    </div>
    <div class="sideBarNameAuthor">
      <div class="sideBarPinListItemName">{{ pin.name }}</div>
      <div v-if='pin.author' class="sideBarPinListItemAuthor">suggested by {{ pin.author }}</div>
    </div>
    <button
      @click="increaseScorePin(index+1)"
      class="sideBarPinListItemLikeButton"
    >
      <i class="fas fa-heart"></i>
      <span
        v-show="pin.score > 0"
      >{{ pin.score ? pin.score : null}}</span>
    </button>
    <button
      @click="deletePin(index)"
      class="sideBarPinListItemDeleteButton"
    >
      <i class="fas fa-times"></i>
    </button>
  </div-->

  <!-- S'il n'y a pas de best pin on affiche la liste normale -->
  <!--div
    v-if="currentEvent.pins.length > 0 && !currentEvent.bestPin"
    v-for="(pin, index) in Array.from(currentEvent.pins)"
    class="sideBarPinListItem"
    @click="selectPin(pin.id)"
  >
    <div class="sideBarPinListItemIcon">
      <img
        class="sideBarPinListItemIconImage"
        src="./assets/markerIcon.png"
      >
    </div>
    <div class="sideBarNameAuthor">
      <div class="sideBarPinListItemName">{{ pin.name }} </div>
      <div v-if='pin.author' class="sideBarPinListItemAuthor">suggested by {{ pin.author }}</div>
    </div>
    <div class="sideBarPinListItemScore">

    </div>
    <button
      @click="increaseScorePin(index)"
      class="sideBarPinListItemLikeButton"
    >
      <i class="fas fa-heart"></i>
      <span
        v-show="pin.score > 0"
      >{{ pin.score ? pin.score : null }}</span>
    </button>
    <button
      @click="deletePin(index)"
      class="sideBarPinListItemDeleteButton"
    >
      <i class="fas fa-times"></i>
    </button>
  </div-->
</template>

<script>
export default {
  name: 'PinListItem',
  props: {
    currentEvent: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.sideBarPinListItem {
  display: flex;
  padding: 10px 5px;
  border-bottom: solid 1px lightgrey;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
}
.sideBarPinListItem:hover {
  background: #F2F2F2;
  border-radius: 3px;
}
.sideBarPinListItemIcon {
  width: 25px;
  margin-right: 10px;
}
.sideBarPinListItemName {
  color: #444;
}
.sideBarPinListItemAuthor {
  font-size: 8pt;
  color: grey;
}
.sideBarPinListItemLikeButton {
  border: none;
  color: #00C5FA;
  background: rgba(0,0,0,0);
  margin-left: auto;
}
.sideBarPinListItemDeleteButton {
  color: lightgrey;
  background: rgba(0,0,0,0);
  border: none;
  transition: color 0.2s ease-in-out;
}
.sideBarPinListItemDeleteButton:hover {
  color: grey;
}

.sideBarPinListItemBest {
  background: #69d18b;
  border-radius: 3px;
  color: white;
  padding-top: 5px;
  transition: background 0.2s ease-in-out;
}
.sideBarPinListItemBest:hover {
  background: #5ebc7d;
}
.sideBarPinListItemBest .sideBarPinListItem:hover {
  background: none;
}
.sideBarPinListItemBestTitle {
  margin-left: 10px;
  font-size: 8pt;
}
.sideBarPinListItemBest .sideBarPinListItem {
  border-bottom: none;
}
.sideBarPinListItemBest .sideBarPinListItemName {
  color: white;
  font-size: 12pt;
  display: flex;
  align-items: center;
}
.sideBarPinListItemBest .sideBarPinListItemLikeButton {
  color: white;
} 
.sideBarPinListItemBest .sideBarPinListItemIcon {
  width: 50px;
  margin-top: -15px;
}
.sideBarPinListItemBest .sideBarPinListItemName {
  font-size: 15pt;
}
</style>
