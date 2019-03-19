import { SAVE_STATE_ACTION } from "../constants/actions";

const initialState = {
    previousStates: [],
};

const reducer = (state=initialState, action) => {

    if (action.type === SAVE_STATE_ACTION) {
        return {
            ...state,
            previousStates: [...state.previousStates, action.payload],
        };
    }

};

export default reducer;
