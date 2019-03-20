import { SET_CURRENT_CHOICES, SET_CURRENT_QUESTION, REMOVE_SHOWN_QUESTION} from "../constants/actions";

export const rewindAction = (question) => {
    return (dispatch) => {
        dispatch({
            type: SET_CURRENT_QUESTION,
            payload: question,
        });
        dispatch({
            type: SET_CURRENT_CHOICES,
            payload: question.position,
        });
        dispatch({
            type: REMOVE_SHOWN_QUESTION,
            payload: question.id,
        });
    };
};
