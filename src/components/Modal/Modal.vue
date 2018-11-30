<template>
  <div ref="modalContainer" class="modalContainer" id="modal">
    <button @click="toggleModal('<div>couille</div>')">Click</button>
    <div ref='modalBackground' class="background"></div>
    <div ref="modal" id="modalWigot" class="modalWigot">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      content: false
    }
  },
  methods: {
    toggleModal(text) {
      console.log('couille', this)
      this.content = text
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
