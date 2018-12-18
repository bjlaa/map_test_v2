<template>
  <div class='eventCreated'>
    <h4>Just one more step!</h4>
    <p>Share your Wigot URL to your friends to continue planning.</p>
    <div class='inputContainer'>
      <input
        class='copyURLInput form-control'
        id='inputEventURL'
        type='text'
        v-bind:value='SETTINGS.shareURL + eventID'
        ref='link'
      />
      <button
        @click='copyEventURL'
        class='buttoninputEventURL btn-primary'
        id='buttoninputEventURL'
      >Copy URL</button>
    </div>
  </div>
</template>

<script>
import SETTINGS from '../../settings'

export default {
  name: 'ShareEventModal',
  props: {
    msg: String
  },
  methods: {
    copyEventURL() {
      /* Get the text field */
      const copyText = this.$refs.link.value

      /* Select the text field */
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand('copy');

      document.getElementById('buttoninputEventURL').style.background = 'orange'
      document.getElementById('buttoninputEventURL').innerHTML = 'Wigot ready to be shared'
    }
  },
  data: function() {
    return {
      SETTINGS: SETTINGS,
      eventID: vm.currentEvent.id
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.eventCreated p 
  margin-bottom: 20px

.eventCreated .inputContainer 
  width: 100%
  display: flex

.eventCreated .inputContainer input 
  width: 100%
  border-radius: 3px 0px 0px 3px

.eventCreated .inputContainer .buttoninputEventURL 
  border-radius: 0px 3px 3px 0px
  max-height: 34px
  white-space: nowrap
</style>
