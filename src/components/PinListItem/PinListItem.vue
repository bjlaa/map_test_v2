<template>
  <div
    v-bind:class='{ pinListItemBestPin: (pin === currentEvent.bestPin) }'
    class="pinListItem"
    @click='selectPin(pin.id)'
  >
    <div class="pinListItemIcon">
      <img
        v-bind:class='{ pinListItemIconImage__show: (pin.id === currentEvent.bestPin.id) }'
        class="pinListItemIconImage"
        src="../../assets/images/beers.png"
      >
      <img
        v-bind:class='{ pinListItemIconImage__show: (pin.id !== currentEvent.bestPin.id) }'
        class="pinListItemIconImage"
        src="../../assets/images/markerIcon.png"
      >
    </div>
    <div class="sideBarNameAuthor">
      <div class="pinListItemName">{{ pin.name }}</div>
      <div v-if='currentEvent.bestPin.author' class="sideBarPinListItemAuthor">suggested by {{ pin.author }}</div>                
    </div>
    <button
      @click="increaseScorePin(index)"
      class="pinListItemLikeButton"
    >
      <i class="fas fa-heart"></i>
      <span
        v-show="pin.score > 0"
      >{{ pin.score ? pin.score : null}}</span>
    </button>
    <button
      @click="deletePin(index)"
      class="pinListItemDeleteButton"
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
    currentEvent: Object,
    pin: Object,
    increaseScorePin: Function,
    deletePin: Function,
    index: Number,
    selectPin: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.pinListItem {
  display: flex;
  padding: 10px 5px;
  border-bottom: solid 1px lightgrey;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
}
.pinListItem:hover {
  background: #F2F2F2;
  border-radius: 3px;
}
.pinListItemIcon 
  width: 25px
  margin-right: 10px

.pinListItemIconImage
  display: none
  &__show
    display: block

.pinListItemName {
  color: #444;
}
.pinListItemAuthor {
  font-size: 8pt;
  color: grey;
}
.pinListItemLikeButton {
  border: none;
  color: #00C5FA;
  background: rgba(0,0,0,0);
  margin-left: auto;
}
.pinListItemDeleteButton {
  color: lightgrey;
  background: rgba(0,0,0,0);
  border: none;
  transition: color 0.2s ease-in-out;
}
.pinListItemDeleteButton:hover {
  color: grey;
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
