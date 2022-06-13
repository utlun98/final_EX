import { USER_LOGGEDIN, USER_LOGGEDOUT } from '../../../commons/actionTypes'

const initialState = null
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGEDIN:
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            localStorage.setItem('user', JSON.stringify(action.payload))  
            const userLogin = JSON.parse(localStorage.getItem('user'))
            return userLogin
            
        case USER_LOGGEDOUT:
            return initialState

        default:
            return state
    }
}
export default loginReducer