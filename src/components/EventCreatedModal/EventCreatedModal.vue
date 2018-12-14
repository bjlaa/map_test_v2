<template>
  <div class="eventCreated">
    <h4>You're good to go!</h4>
    <p>Now, share your Wigot to your friends and start planning.</p>
    <div class="inputContainer">
      <input
        class="copyURLInput form-control"
        id="inputEventURL"
        type="text"
        value=`${SETTINGS.shareURL}${eventId}`
        ref="link"
      />
      <button
        onclick="copyEventURL"
        class="buttoninputEventURL btn-primary"
        id='buttoninputEventURL'
        ref="copyButton"
      >Copy URL</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    eventId: String
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.eventCreated p 
  margin-bottom 20px

.eventCreated .inputContainer 
  width 100%
  display flex

.eventCreated .inputContainer input 
  width 100%
  border-radius 3px 0px 0px 3px

.eventCreated .inputContainer .buttoninputEventURL 
  border-radius 0px 3px 3px 0px
  max-height 34px
  white-space nowrap

</style>
