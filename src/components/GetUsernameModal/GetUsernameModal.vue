<template>
  <form
    v-on:submit.prevent="handleSaveUsername"
    class="getUsername"
  >
    <div class="title">Please choose a name to participate:</div>
    <input
      required
      class="usernameInput form-control"
      id="usernameInput"
      type="text"
    />
    <button
      class="btn btn-primary"
    >Join event</button>
  </form>
</template>

<script>
export default {
  name: 'GetUsernameModal',
  props: {
    msg: String,
    saveUsername: Function,
    showWelcomeMessage: Function
  },
  methods: {
    handleSaveUsername() {
      this.saveUsername()
      this.showWelcomeMessage()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.getUsername .title 
  font-size: 14pt

.getUsername .usernameInput 
  margin-top: 10px

.getUsername button 
  display: block
  margin-top: 20px
  margin-left: auto

</style>
