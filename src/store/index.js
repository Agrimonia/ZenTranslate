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
    machineTranslate(store) {
      fetch(process.env.MT_URL, {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify({
          q: store.state.sentences,
          target: 'zh-CN',
        }),
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network Error');
      }).then((result) => {
        store.state.translatedSentences = result.data.translations.map(value => value.translatedText); // eslint-disable-line
      }).catch((error) => {
        console.log(`Error when fetching ${error.message}`); // eslint-disable-line no-console
      });
    },
  },
});
