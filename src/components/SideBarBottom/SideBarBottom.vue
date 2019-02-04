<template>
  <div class="sideBarBottom">
    <div
      v-if="appState === appStates.wigotCreation && currentEvent.pins && currentEvent.pins.length === 0"
      class="sideBarBottom__textAddPin"
    >
      Add a pin by using the search bar or by clicking on the map.
    </div>

    <div
      v-if="appState === appStates.wigotCreation && currentEvent.pins && currentEvent.pins.length > 0"
      class="sideBarBottom__createWigot"
    >
      <div class="sideBarBottom__createWigot__text">
        Everything set up? Create your Wigot to start sharing it.
      </div>
      <button
        @click="toggleCreateEventModal"
        class="sideBarBottom__createWigot__button"
      >
        Create Wigot
      </button>
    </div>

    <div
      v-if="appState === appStates.sharing"
      class="sideBarBottom__createWigot"
    >
      <div class="createWigotText">
        Share this Wigot to your friends / family.
      </div>
      <button
        @click="toggleShareEventModal(currentEvent.id);"
        class="sideBarBottom__createWigot__button"
      >
        Share Wigot
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarBottom',
  props: {
    eventName: String,
    appStates: Object,
    appState: Number,
    currentEvent: Object,
    toggleCreateEventModal: Function,
    toggleShareEventModal: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.sideBarBottom {
  &__textAddPin {
    margin-bottom: 20px;
    font-size: 10pt;
  }
  &__createWigot {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 0px 20px;
    width: 100%;
    text-align: center;
    &__text {
      font-size: 10pt;
    }
    &__button {
      margin: 20px auto;
      display: block;
      color: white;
      padding: 10px 15px;
      border-radius: 50px;
      background: #00C5FA;
      border: none;
      font-size: 10pt;
    }
  }
}
</style>
