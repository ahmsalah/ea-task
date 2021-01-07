import { all } from 'redux-saga/effects';
import languageReducer from './language.feature';
import phrasesReducer, { watchPhrases } from './phrases.feature';

/**
 * The way redux store is structured here is by using the ducks pattern (all Redux logic for a feature in a single file), reade more about it in redux style guide
 * https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */

export function* rootSaga() {
  yield all([watchPhrases()]);
}

export const rootReducer = {
  language: languageReducer,
  phrases: phrasesReducer,
};
