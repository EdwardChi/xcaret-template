import counterReducer  from '../reducers/const_reducer'
export const LOAD_STATE = 'LOAD_STATE'
export const SAVE_STATE = 'SAVE_STATE'
export const loadState2 = () => {
    return{
        count: counterReducer("", {type: 'LOAD_STATE'})
    }
}
export const saveState = (state) => {
    return{
        type: SAVE_STATE,
        payload: state
    }
}
