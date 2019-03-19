import { SAVE_STATE_ACTION, UNDO_STATE_ACTION } from '../constants/actions';

export const saveStateAction = () => ({
    type: SAVE_STATE_ACTION,
});

export const undoStateAction = () => ({
    type: UNDO_STATE_ACTION,
});
