import * as types from '../commons/actionTypes'


export const loginUserAction = (payload) => {
    return {
        type: types.LOGIN_USER,
        payload
    }
}

export const registerAction = (payload) => {
    return {
      type: types.REGISTER_USER,
      payload
    }
  };
export const userLoggedIn = (payload) => {
    return {
        type: types.USER_LOGGEDIN,
        payload
    }
}
export const userRegistered = (payload) => {
    return {
      type: types.REGISTER_USER_SUCCESS,
      payload
    }
  };

export const logoutUserAction = () => {
    return {
        type: types.LOGOUT_USER
    
    }
}

export const userLoggedOutAction = () => {
    return {
        type: types.USER_LOGGEDOUT
        
    }
}