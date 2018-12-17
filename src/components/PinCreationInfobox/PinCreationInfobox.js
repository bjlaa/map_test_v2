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