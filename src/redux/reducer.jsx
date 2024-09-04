const initialState = {
  username: '',
  isSubmitting: false,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_FIELD':
      return {...state, [action.field]: action.value};
    case 'SIGNUP_REQUEST':
      return {...state, isSubmitting: true, error: null};
    case 'SIGNUP_SUCCESS':
      return {...state, isSubmitting: false};
    case 'SIGNUP_FAILURE':
      return {...state, isSubmitting: false, error: action.error};
    default:
      return state;
  }
};

export default signupReducer;
