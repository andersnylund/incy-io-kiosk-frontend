import { SAVE_STATE_ACTION, UNDO_STATE_ACTION, RESET_STATE_ACTION } from '../constants/actions';

export const saveStateAction = (previousState) => ({
    type: SAVE_STATE_ACTION,
    payload: previousState,
});

export const undoStateAction = () => ({
    type: UNDO_STATE_ACTION,
});

export const resetStateAction = () => ({
    type: RESET_STATE_ACTION,
});
