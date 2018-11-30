import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowingModalCloseButton: true,
    modalContent: true
  },
  getters: {
    isShowingModalCloseButton: state => state.isShowingModalCloseButton,
    modalContent: state => state.modalContent
  },
  mutations: {
    toggleModal(state, modalContent, isShowingModalCloseButton) {
      Vue.set(state, 'modalContent', modalContent)
      Vue.set(state, 'isShowingModalCloseButton', isShowingModalCloseButton ? isShowingModalCloseButton : false)
    }
  },
  actions: {
    toggleModal(context, modalContent, isShowingModalCloseButton) {
      context.commit('toggleModal', modalContent, isShowingModalCloseButton)
    }
  },
});
