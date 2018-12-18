const CreateEventModal = `
  <form v-on:submit.prevent="createEvent" class="createEvent">
    <h4 class="handleCreateEvent">Just one more step to create your Wigot...</h4>
    <h5 class="createEventNameTitle">Set your name:</h5>
    <input
      required
      id="createEventNameAuthor"
      class="searchInput form-control"
      type="text"
      ref="eventAuthor"
    >
    <h5 class="modalTitle">Name your event:</h5>
    <input
      required
      id="createEventNameEvent"
      class="searchInput form-control"
      type="text"
      ref="eventName"
    >
    <button type="button" class="buttonCancel btn btn-light" onclick="vm.toggleModal(false)">Cancel</button>
    <button onclick='vm.createEvent(document.getElementById('createEventNameAuthor').value, document.getElementById('createEventNameEvent').value)'class="buttonCreate btn btn-primary">Create event</button>
  </form>
`

export default CreateEventModal
