import * as actionConstants from '../../constants/home';

const initialState = {
  welcomeText: 'Welcome!'
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case [actionConstants.CHANGE_TEXT]:
      return {
        ...state,
        welcomeText: action.payload
      }
    default:
      return state;
  }
}

export default homeReducer;