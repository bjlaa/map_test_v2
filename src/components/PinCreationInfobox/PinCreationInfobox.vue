<script>
  const PinCreationInfoBox = `
    <div class="pinCreationInfoBox">
      <div class="pinCreationInfoBoxTitle">Create your pin:</div>
      <form v-on:submit.prevent="vm.createPinFromMap({ name: document.getElementById('nameInputPin').value, address:  document.getElementById('addressInputPin').value })">
        <div class="nameInput">
          <label for="nameInputPin">
            Name your pin:
          </label>
          <input
            type="text"
            id="nameInputPin"
            ref="nameInputPin"
            defaultValue=""
          />
        </div>
        <div class="addressInput">
          <label for="addressInputPin">
          Add an address:
          </label>
          <input
            type="text"
            id="addressInputPin"
            ref="addressInputPin"
            defaultValue=""
          />
        </div>
      </form>
      <button
        onclick="vm.cancelPinFromMap"
        class="pinCreationInfoBoxCancel btn btn-light"
      >
        Cancel
      </button>
      <button
        onclick="vm.createPinFromMap({ name: document.getElementById('nameInputPin').value, address:  document.getElementById('addressInputPin').value })"
        class="pinCreationInfoBoxSubmit btn btn-primary"
      >
        Create
      </button>
    </div>
  `

  export default PinCreationInfoBox
</script>




<template>
  <div class="pinCreationInfoBox">
    <div class="pinCreationInfoBoxTitle">Create your pin:</div>
    <form v-on:submit.prevent="createPinFromMap({ name: $ref.nameInputPin, address: $ref.addressInputPin })">
      <div class="nameInput">
        <label for="nameInputPin">
          Name your pin:
        </label>
        <input
          type="text"
          id="nameInputPin"
          ref="nameInputPin"
          defaultValue=""
        />
      </div>
      <div class="addressInput">
        <label for="addressInputPin">
        Add an address:
        </label>
        <input
          type="text"
          id="addressInputPin"
          ref="addressInputPin"
          defaultValue=""
        />
      </div>
    </form>
    <button
      @click="handleCancelPin"
      class="pinCreationInfoBoxCancel btn btn-light"
    >
      Cancel
    </button>
    <button
      @click="handleCreatePin"
      class="pinCreationInfoBoxSubmit btn btn-primary"
    >
      Create
    </button>
  </div>
</template>

<!--script>
export default {
  name: 'PinCreationInfoBox',
  props: {
    msg: String,
    createPinFromMap: Function,
    cancelPinFromMap: Function
  },
  methods: {
    handleCreatePin() {
      this.createPinFromMap({ name: this.$ref.nameInputPin, address: this.$ref.addressInputPin })
    },
    handleCancelPin() {
      this.cancelPinFromMap()
    }
  }
};
</script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.pinCreationInfoBox {

}
.pinCreationInfoBoxTitle {
  margin-bottom: 20px;
  font-size: 12pt;
}

.pinCreationInfoBox label {
  width: 100%;
}
.pinCreationInfoBox input {
  width: 100%;
}
.addressInput {
  margin-bottom: 20px;
}
</style>
