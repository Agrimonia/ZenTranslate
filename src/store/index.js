import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    sentences: [
      'test sentence 1',
      'test sentence 2',
      'test sentence 3',
      'test sentence 4',
    ],
    translatedSentences: [
      'test translated sentence 1',
      'test translated sentence 2',
      'test translated sentence 3',
      'test translated sentence 4',
    ],
  },
  getters: {
    currentSentence: state => state.sentences[state.currentIndex],
    currentTranslatedSentence: state => state.translatedSentences[state.currentIndex],
    sentencesAmount: state => state.sentences.length,
  },
  mutations: {
    switchToNext(state) {
      // eslint-disable-next-line no-param-reassign
      state.currentIndex += 1;
      if (state.currentIndex === state.sentences.length) {
        // eslint-disable-next-line no-param-reassign
        state.currentIndex = 0;
      }
    },
    switchCurrentIndex(state, key) {
      // eslint-disable-next-line no-param-reassign
      state.currentIndex = key;
    },
    updateTranslatedSentence(state, editedSentence) {
      // eslint-disable-next-line no-param-reassign
      state.translatedSentences[state.currentIndex] = editedSentence;
    },
  },
  // actions: {
  //   machineTranslate(store, context) {

  //   },
  // },
});
