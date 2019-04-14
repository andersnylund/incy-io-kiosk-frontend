import deepFreeze from 'deep-freeze';

import answerReducer from '../../src/reducers/answerReducer';
import { addAnswerAction, resetAnswersAction, skipAnswerAction } from '../../src/actions/answerActions';

/**
 * Using deep-freeze allows to test that the reducer is NOT mutating the state
 * https://twitter.com/dan_abramov/status/659417780236742656?lang=en
 */

describe('answerReducer', () => {
    it('should set the initial state', () => {
        const state = deepFreeze(answerReducer(undefined, { type: 'TEST_ACTION' }));
        expect(state).toEqual({
            allAnswers: {},
            answers: {},
            skippedQuestionIds: [],
        });
    });

    it('should add an answer', () => {
        const state = deepFreeze(answerReducer(undefined, addAnswerAction({ questionId: 1, answer: 'test'})));
        expect(state).toEqual({
<<<<<<< HEAD
            allAnswers: {
                '1': 'test',
            },
=======
>>>>>>> master
            answers: {
                '1': 'test',
            },
            skippedQuestionIds: [],
        });
    });

    it('should add 2 answers', () => {
        const state = deepFreeze(answerReducer(undefined, addAnswerAction({ questionId: 1, answer: 'test1'})));
        const result = deepFreeze(answerReducer(state, addAnswerAction({questionId: 2, answer: 'test2'})));
        expect(result).toEqual({
<<<<<<< HEAD
            allAnswers: {
                '1': 'test1',
                '2': 'test2',
            },
            answers: {
                '1': 'test1',
                '2': 'test2',
            },
            skippedQuestionIds: [],
=======
            answers: {
                '1': 'test1',
                '2': 'test2',
            },
            skippedQuestionIds: [],
        });
    });

    it('should skip a question', () => {
        const state = deepFreeze(answerReducer(undefined, addAnswerAction({ questionId: 1, answer: 'test1'})));
        const result = deepFreeze(answerReducer(state, skipAnswerAction(123)));
        expect(result).toEqual({
            answers: {
                '1': 'test1',
            },
            skippedQuestionIds: [ 123 ],
>>>>>>> master
        });
    });

    it('should reset the state', () => {
        const state = deepFreeze(answerReducer(undefined, addAnswerAction({ questionId: 1, answer: 'test1'})));
        const result = deepFreeze(answerReducer(state, resetAnswersAction()));
        expect(result).toEqual({
<<<<<<< HEAD
            allAnswers: {},
=======
>>>>>>> master
            answers: {},
            skippedQuestionIds: [],
        });
    });
});
