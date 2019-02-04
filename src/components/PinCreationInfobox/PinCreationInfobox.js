/*
*   Styling located in ./src/styles.styl
*/

const PinCreationInfoBox = `
  <div class="pinCreationInfoBox">
    <div class="pinCreationInfoBox__title">Create your pin:</div>
    <form
      class="pinCreationInfoBox__form"
      v-on:submit.prevent="vm.createPinFromMap({ name: document.getElementById('nameInputPin').value, address:  document.getElementById('addressInputPin').value })">
      <div class="pinCreationInfoBox__form__nameInput">
        <label
          class="pinCreationInfoBox__form__nameInput__label"
          for="nameInputPin"
        >
          Name your pin:
        </label>
        <input
          type="text"
          id="nameInputPin"
          ref="nameInputPin"
          defaultValue=""
          class="pinCreationInfoBox__form__nameInput__input"
        />
      </div>
      <div class="pinCreationInfoBox__form__addressInput">
        <label
          class="pinCreationInfoBox__form__addressInput__label"
          for="addressInputPin"
        >
        Add an address:
        </label>
        <input
          class="pinCreationInfoBox__form__addressInput__input"
          type="text"
          id="addressInputPin"
          ref="addressInputPin"
          defaultValue=""
        />
      </div>
    </form>
    <button
      onclick="vm.cancelPinFromMap"
      class="pinCreationInfoBox__cancelButton btn btn-light"
    >
      Cancel
    </button>
    <button
      onclick="vm.createPinFromMap({ name: document.getElementById('nameInputPin').value, address:  document.getElementById('addressInputPin').value })"
      class="pinCreationInfoBox__createButton btn btn-primary"
    >
      Create
    </button>
  </div>
`

export default PinCreationInfoBox