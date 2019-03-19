import { SAVE_STATE_ACTION, UNDO_STATE_ACTION, RESET_STATE_ACTION } from "../constants/actions";

const initialState = {
    previousStates: [],
};

const reducer = (state = initialState, action) => {

    if (action.type === SAVE_STATE_ACTION) {
        return {
            ...state,
            previousStates: [...state.previousStates, action.payload],
        };
    }
    if (action.type === UNDO_STATE_ACTION) {
        return {
            previousStates: [...state.previousStates.pop()],
            state: state.history[state.history.previousStates.length - 1],
        };
    }
    if (action.type === RESET_STATE_ACTION) {
        return {
            previousStates: [],
        };
    }
    return state;
};

export default reducer;
