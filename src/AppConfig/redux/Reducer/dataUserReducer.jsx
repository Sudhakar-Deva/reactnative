const dataUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpData:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default dataUserReducer;
