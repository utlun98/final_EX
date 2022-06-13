import * as types from '../commons/actionTypes'

/**
 * 
 * @param {text, color} msg 
 */
export const setAlertAction = msg => {
    return {
        type: types.SET_ALERT,
        msg
    }
}

export const resetAlertAction = () => {
    return {
        type: types.RESET_ALERT
    }
}
export const loadingAction = () => {
    return {
        type: types.LOADING
    }
}
export const loadedAction = () => {
    return {
        type: types.LOADED
    }
}