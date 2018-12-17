<template>
  <aside class="sideBar card">
        <div class="sideBarLogo">
          <img class="sideBarLogoImage" src="../../assets/Wigot_Logo.png">
        </div>
        <div v-if="currentEvent.title" class="sideBarHeader">
          <div class="sideBarHeaderTitle">
            {{ currentEvent.title }}
          </div>
          <div v-if="currentEvent.author" class="sideBarHeaderAuthor">
            Created by {{ currentEvent.author }}
          </div>
        </div>
        <PinList v-bind='{ currentEvent }' />
  </aside>

</template>

<script>
import PinList from '../PinList/PinList.vue'

export default {
  name: 'SideBar',
  components: {
    PinList
  },
  props: {
    currentEvent: Object
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


.card {
  /*
    Material design box-shadow (card 2): https://codepen.io/sdthornton/pen/wBZdXq
    c'est les normes design de google reconnues et utilisées 
    >> un peu moins marquée que celle que tu avais utilisée avant
  */
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  /*box-shadow: 0rem .5rem 1rem rgba(0,0,0,.3);*/
  border-radius: 0.8rem;
  /* padding: 2px 16px 2px 16px;*/
}
</style>
