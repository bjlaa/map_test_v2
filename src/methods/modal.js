import CreateEventModal from '../components/CreateEventModal/CreateEventModal.vue'
import EventCreatedModal from '../components/EventCreatedModal/EventCreatedModal.vue'
import ShareEventModal from '../components/ShareEventModal/ShareEventModal.vue'
import GetUsernameModal from '../components/GetUsernameModal/GetUsernameModal.vue'
import WelcomeModal from '../components/WelcomeModal/WelcomeModal.vue'

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

export const toggleModal = function (value) {
  this.modalContent = value
}

export const toggleCreateEventModal = function () {
  this.toggleModal(CreateEventModal)
}

export const toggleEventCreatedModal = function () {
  this.toggleModal(EventCreatedModal)
}

export const toggleShareEventModal = function () {
  this.toggleModal(ShareEventModal)
}

export const toggleGetUsernameModal = function () {
  this.toggleModal(GetUsernameModal)
}

export const showWelcomeMessage = function () {
  toggleModal(true, WelcomeModal /* (this.currentEvent.title) */)

  const self = this
  setTimeout(() => {
    self.toggleModal(false)
  }, 2000)
}
