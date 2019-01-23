<template>
  <aside class="sideBar card">
    <div class="sideBarLogo">
      <img class="sideBarLogoImage" src="../../assets/images/Wigot_Logo.png">
    </div>
    <div v-if="currentEvent.title" class="sideBarHeader">
      <div class="sideBarHeaderTitle">
        {{ currentEvent.title }}
      </div>
      <div v-if="currentEvent.author" class="sideBarHeaderAuthor">
        Created by {{ currentEvent.author }}
      </div>
    </div>
    <PinList v-bind='{ currentEvent, increaseScorePin, deletePin, selectPin }' />
    <SideBarBottom v-bind='{ appStates, appState, currentEvent, toggleCreateEventModal, toggleShareEventModal }' />
  </aside>
</template>

<script>
import PinList from '../PinList/PinList.vue'
import SideBarBottom from '../SideBarBottom/SideBarBottom.vue'

export default {
  name: 'SideBar',
  components: {
    PinList,
    SideBarBottom
  },
  props: {
    currentEvent: Object,
    increaseScorePin: Function,
    deletePin: Function,
    selectPin: Function,
    appStates: Object,
    appState: Number,
    toggleCreateEventModal: Function,
    toggleShareEventModal: Function,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.wigotTitle {
  text-align: center;
}
.bestLoc {
  text-align: center;
  font-weight: bold;
}
.sideBar {
  position: fixed;
  top: 20px;
  right: 20px;
  width: calc(25% - 20px);
  padding: 15px 0px;
  height: calc(100vh - 40px);
  background: #FAFAFA;
}

.sideBarLogo {
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.sideBarLogoImage {
  max-width: 150px;
}
.sideBarHeader {
  padding: 10px 15px;

}
.sideBarHeaderTitle {
  font-size: 20pt;
  line-height: 0.8;
  color: #444;
  margin-bottom: 5px;
}
.sideBarHeaderAuthor {
  font-size: 8pt;
  color: grey;
}
</style>
