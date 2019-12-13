import { SHOW_INSTALL_PROMPT } from "../actions/installPrompt";

/*
* state = {<showInstallPrompt>: <true|false>}
*/

const initialState = {
  showInstallPrompt: false,
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INSTALL_PROMPT:
      return Object.assign({}, state, { showInstallPrompt: action.showInstallPrompt });
    default:
    return state;
  }
};

export default results;
