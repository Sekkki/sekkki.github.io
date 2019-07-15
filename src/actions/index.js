const setUser = (data) => {
  return (dispatch) => {
  dispatch({
      type: "SET_USER",
      payload: data
    })
  }
};

const removeUser = () => {
  return (dispatch) => {
    dispatch({
        type: "REMOVE_USER",
        payload: {}
      })
    }
};

const setAuth = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SET_AUTH",
      payload: data
  });
  }
}

export {
  setUser,
  removeUser,
  setAuth
}
