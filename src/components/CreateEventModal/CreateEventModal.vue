<template>
  <form v-on:submit.prevent="handleCreateEvent" class="createEvent">
    <h4 class="handleCreateEvent">Just one more step to create your Wigot...</h4>
    <h5 class="createEventNameTitle">Set your name:</h5>
    <input
      required
      id="createEventNameAuthor"
      class="searchInput form-control"
      type="text"
      ref="eventAuthor"
    >
    <h5 class="modalTitle">Name your event:</h5>
    <input
      required
      id="createEventNameEvent"
      class="searchInput form-control"
      type="text"
      ref="eventName"
    >
    <button type="button" class="buttonCancel btn btn-light" @click="vm.toggleModal(false)">Cancel</button>
    <button class="buttonCreate btn btn-primary">Create event</button>
  </form>
</template>

<script>
export default {
  name: 'CreateEventModal',
  props: {
  },
  methods: {
    handleCreateEvent() {
      const eventAuthor = this.$refs.eventAuthor.value
      const eventName = this.$refs.eventName.value

      vm.createEvent(eventAuthor, eventName)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#createEventNameEvent 
  margin-bottom 30px

.createEvent h4 
  margin-bottom 20px

.createEvent .buttonCancel,
.createEvent .buttonCreate 
  margin-left auto
  display inline-block

</style>
