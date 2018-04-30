import { TOGGLE_SIDE_MENU } from '../actions'

const menu = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_MENU:
            return {...state, isOpen: !state.isOpen}
        default:
            return state
    }
}

export default menu;