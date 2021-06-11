const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    default:
      return state;
  }
};

export default authReducer;