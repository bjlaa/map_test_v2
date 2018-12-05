<template>
  <aside class="sideBar card">
        <div class="sideBarLogo">
          <img class="sideBarLogoImage" src="./assets/Wigot_Logo.png">
        </div>
        <div v-if="currentEvent.title" class="sideBarHeader">
          <div class="sideBarHeaderTitle">
            {{ currentEvent.title }}
          </div>
          <div v-if="currentEvent.author" class="sideBarHeaderAuthor">
            Created by {{ currentEvent.author }}
          </div>
        </div>
        <PinList />
  </aside>

</template>

<script>
  import PinList from './components/PinList/PinList.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
