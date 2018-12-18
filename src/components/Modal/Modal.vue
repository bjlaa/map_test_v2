<template>
  <div
    v-bind:class="{ showModal: modalContent }"
    ref="modalContainer"
    class="modalContainer"
  >
    <div
      id='modalBackground'
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
      <component :is='childComponent'></component>
      <div id="modalContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalContent: [Object, Boolean],
    toggleModal: Function,
    isShowingModalCloseButton: Boolean,
    currentEvent: Object
  },
  computed: {
    childComponent: function() {
      return this.modalContent
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
  z-index: -100
  transition: opacity 0.5s ease-in-out
  opacity 0

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
