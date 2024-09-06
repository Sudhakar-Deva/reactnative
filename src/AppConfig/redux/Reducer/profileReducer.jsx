const {LibraryIMG, CameraIMG} = require('../Actions/Actiontypes');

const initialState = {
  user: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CameraIMG:
      return {
        ...state,
        user: action.payload,
      };
    case LibraryIMG: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
export default profileReducer;
