import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowingModalCloseButton: true,
    modalContent: true
  },
  mutations: {
    toggleModal(state, modalContent, isShowingModalCloseButton) {
      console.log('test')
      state.modalContent = modalContent
      state.isShowingModalCloseButton = isShowingModalCloseButton ? isShowingModalCloseButton : false
    }
  },
  actions: {

  },
});
