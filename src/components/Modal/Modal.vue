<template>
  <div
    v-bind:class="{ showModal: modalContent }"
    ref="modalContainer"
    class="modalContainer"
  >
    <div
      ref='modalBackground'
      class="modalContainer__background"
    ></div>
    <div
      ref="modal"
      class="modalContainer__modal"
    >
      <button
        v-if="isShowingModalCloseButton"
        @click="toggleModal(false)"
      >
          <i class="fas fa-times"></i>
      </button>
      {{ modalContent }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  },
  computed: {
    isShowingModalCloseButton() {
      return this.$store.getters.isShowingModalCloseButton
    },
    modalContent() {
      return this.$store.getters.modalContent
    }
  },
  methods: {
    ...mapMutations([
      'toggleModal'
    ]),
    toggleModal(modalContent, isShowingModalCloseButton) {
      this.$store.dispatch('toggleModal', modalContent, isShowingModalCloseButton)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.modalContainer
  position: fixed
  top: 0
  left: 0
  height: 100vh
  width: 100vw
  z-index: 100
  transition: opacity 0.5s ease-in-out

.showModal
  z-index: 100
  opacity: 1

.modalContainer__background
  height: 100vh
  width: 100vw
  background: rgba(0,0,0,0.6)

.modalContainer__modal
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  border-radius: 10px
  background: #FAFAFA
  padding: 20px
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)

.modalContainer__modal__closeButton
  position: absolute
  top: 20px
  right: 20px
</style>
