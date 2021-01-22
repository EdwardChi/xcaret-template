
import { LOAD_STATE, SAVE_STATE } from '../actions/index_action'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case LOAD_STATE:
            try {
                const serializedData = localStorage.getItem('state')
                if (serializedData === null) {
                    return state = 0
                }
                state = JSON.parse(serializedData).length
                return state 
            } catch (error) {
                return state
            }
        case SAVE_STATE:
            try {
                let serializedData = JSON.stringify(action.payload)
                localStorage.setItem('state', serializedData)
                return action.payload.length
            } catch (error) {
                return state
            }
        default:
            return state;
    }
}

export default counterReducer;