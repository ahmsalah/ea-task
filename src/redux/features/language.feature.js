import { createAction, createReducer } from '@reduxjs/toolkit';

export const changeLanguage = createAction('language/changeLanguage');

const initialState = localStorage.getItem('locale') || 'ar';

/**
 * The way redux store is structured here is by using the ducks pattern (all Redux logic for a feature in a single file), reade more about it in redux style guide
 * https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */

export default createReducer(initialState, {
  [changeLanguage]: state => {
    const language = state === 'ar' ? 'en' : 'ar';
    localStorage.setItem('locale', language);
    return language;
  },
});
