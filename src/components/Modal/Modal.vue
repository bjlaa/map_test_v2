<template v-if="content">
  <div ref="modalContainer" class="modalContainer" id="modal">

    <div ref='modalBackground' class="background"></div>
    <div ref="modal" id="modalWigot" class="modalWigot">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    this.toggleModal('<div>bit</div>')
  },
  data() {
    return {
      content: false,
    };
  },
  methods: {
    toggleModal: (content) => {
      console.log('couille', this)
      this.content = content;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>