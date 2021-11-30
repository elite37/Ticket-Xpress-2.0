export const initialState = {
  userDetails: {},
};

export const actionTypes = {
  SET_USER_DETAILS: "SET_USER_DETAILS",
};

const reducer = (currentState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER_DETAILS:
      return {
        ...currentState,
        userDetails: action.user,
      };

    default:
      return currentState;
  }
};

export default reducer;
