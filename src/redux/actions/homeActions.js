import * as actionConstants from '../constants/home';

export const changeText = text => ({
  type: actionConstants.CHANGE_TEXT,
  payload: text
});