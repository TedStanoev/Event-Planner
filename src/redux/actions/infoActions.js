import * as actionConstants from '../constants/info';

export const changeText = text => ({
  type: actionConstants.CHANGE_TEXT,
  payload: text
});