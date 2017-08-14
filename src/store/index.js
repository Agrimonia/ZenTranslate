import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    sentences: [],
    translatedSentences: [],
  },
  getters: {
    currentSentence: state => state.sentences[state.currentIndex],
    currentTranslatedSentence: state => state.translatedSentences[state.currentIndex],
    sentencesAmount: state => state.sentences.length,
  },
  mutations: {
    switchToNext(state) {
      state.currentIndex += 1;
      if (state.currentIndex === state.sentences.length) {
        state.currentIndex = 0;
      }
    },
    switchToPrevious(state) {
      state.currentIndex -= 1;
      if (state.currentIndex === 0) {
        state.currentIndex = state.sentences.length;
      }
    },
    switchCurrentIndex(state, key) {
      state.currentIndex = key;
    },
    updateTranslatedSentence(state, editedSentence) {
      state.translatedSentences[state.currentIndex] = editedSentence;
    },
    loadSentences(state, sentences) {
      state.sentences = sentences;
    },
    loadTranslatedSentences(state, translatedSentences) {
      state.translatedSentences = translatedSentences;
    },
  },
  actions: {
    machineTranslate({ commit }) {
      commit('loadTranslatedSentences');
    },
  },
});
