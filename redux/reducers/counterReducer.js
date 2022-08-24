import {INCREMENT} from '../actions/types'
import {DECREMENT} from '../actions/types'

const initialState = {
    counter: 0
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
       
        default:
            return state
    }
}