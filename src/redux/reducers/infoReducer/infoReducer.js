import * as actionConstants from '../../constants/info';

const initialState = {
  infoText: 'Get to know this page'
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case [actionConstants.CHANGE_TEXT]:
      return {
        ...state,
        infoText: action.payload
      }
    default:
      return state;
  }
}

export default infoReducer;