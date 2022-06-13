import { LOADING, LOADED } from '../../../commons/actionTypes'

const initialState = false

export const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return true

        case LOADED:
            return false

        default:
            return state
    }
}
export default loadReducer;