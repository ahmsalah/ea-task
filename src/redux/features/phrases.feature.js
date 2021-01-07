import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import API from 'utils/api';
import snackbar from 'utils/snackbar';

/**
 * The way redux store is structured here is by using the ducks pattern (all Redux logic for a feature in a single file), reade more about it in redux style guide
 * https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */

/* API calls */
const fetchPhrases = () => API.get('/phrases');

/* Actions */
export const loadPhrases = createAction('phrases/loadPhrases');
export const receivedPhrases = createAction('phrases/receivedPhrases');

/* Initial State */
const initialState = {
  loading: false,
  list: [],
};

/* Reducer */
export default createReducer(initialState, {
  [loadPhrases]: state => {
    return {
      ...state,
      loading: true,
    };
  },
  [receivedPhrases]: (state, action) => {
    return {
      ...state,
      loading: false,
      list: action.payload,
    };
  },
});

/* Sagas */
function* handleLoadPhrases() {
  try {
    const resp = yield call(fetchPhrases);
    yield put(receivedPhrases(resp.data.Phrases));
  } catch (error) {
    // Send the error to sentry
    // yield console.log(error.toString(), error?.response);
    yield snackbar.error('Oops, Something went wrong while fetching your data');
  }
}

/* Feature root saga */
export function* watchPhrases() {
  yield takeLatest(loadPhrases.toString(), handleLoadPhrases);
}
