import userService from '../../userService/index'

function fetchStart() {
  return {
    type: 'USER_FETCHING'
  }
}

function fetchFail(payload) {
  return {
    type: 'USER_FAIL',
    payload
  }
}

export function fetchSuccess(payload) {
  return {
    type: 'USER_SUCCESS',
    payload
  }
}

export function loginAction(email, password) {
  return dispatch => {
    dispatch(fetchStart());

    return userService.login(email, password).then((res) => {
      let receivedUser = res.data;
      localStorage.setItem("authorization", res.data.token);
      console.log("Token received: ", res.data.token);
      dispatch(fetchSuccess({user: {login: receivedUser.name, email: receivedUser.email}, data: JSON.parse(receivedUser.data), password: password}))

      console.log('0')
    })
      .catch((error) => {
        if (error.response.data == "Incorrect email or password" || error.response.data.startsWith("User doesn't exist with email:")) {
          dispatch(fetchFail(error.response.data));
          throw Error(error.response.data);
        } 
        throw Error(error)
      })
  }
}

export function signupAction(user, password) {
  return dispatch => {
    dispatch(fetchStart());

    return userService.signup(user, password).then((res) => {
      console.log("successful signup", res);
      let addedUser = res.data;
      console.log("received data: ", addedUser);
      localStorage.setItem("authorization", res.data.token);
      console.log("Token received: ", res.data.token);
      dispatch(fetchSuccess({user: {login: addedUser.name, email: addedUser.email}, data: JSON.parse(addedUser.data), password: password}))
    })
      .catch((error) => {
        console.log(String(error.response.data))
        if (String(error.response.data) == "User with such email already exists") {
          dispatch(fetchFail(error.response.data));
          throw Error(error.response.data);
        }
        throw Error(error)
      })
  }
}

export function setDataAction(data, email, password) {
  return dispatch => {
    dispatch(fetchStart());

    return userService.setdata(data, email, password).then((res) => {
      let receivedUser = res.data;
      dispatch(fetchSuccess({user: {login: receivedUser.name, email: receivedUser.email}, data: JSON.parse(receivedUser.data), password: password}))
    })
      .catch((error) => {
        console.log(error)
        console.log(error.response)
        console.log(error.response.data)
        console.log(error.response.data.error)

        if (error.response.data.error == "Unauthorized") {

          console.log("Updating token...");

          userService.login(email, password).then((res) => {

            localStorage.setItem("authorization", res.data.token);
            console.log("Token received: ", res.data.token);
            console.log("Token successfully updated. Retrying to set data...");

            dispatch(setDataAction(data, email, password));

          }).catch((error) => {
              dispatch(fetchFail(error))
              throw Error(error)
          })
          

        } else {
          dispatch(fetchFail(error))
          throw Error(error)
        }
      })
  }
}
