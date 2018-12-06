<template>
          <div class="sideBarPinListItem">
              <div class="sideBarPinListItemIcon">
                <img
                  class="sideBarPinListItemIconImage"
                  src="./assets/beers.png"
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
          </div>
          <!-- S'il y a un best pin on retire le premier pin de la liste à afficher -->
          <div
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
          </div>
  
          <!-- S'il n'y a pas de best pin on affiche la liste normale -->
          <div
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
          </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
