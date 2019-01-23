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
import { showWelcomeMessage } from '../../methods/modal'

export default {
  name: 'GetUsernameModal',
  props: {
    msg: String,
    saveUsername: Function
  },
  methods: {
    handleSaveUsername() {
      this.$root.saveUsername()
      showWelcomeMessage()
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
