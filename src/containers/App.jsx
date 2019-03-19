import { setAllAnsweredAction, setShowErrorAction, setErrorMsgAction } from '../actions/flagActions';
import { connect } from 'react-redux';

import { addAnswerAction, resetAnswersAction } from '../actions/answerActions';
import { setQuestionsAction, setCurrentQuestionAction } from '../actions/questionActions';
import { setCategoryAction, setPlaceAction } from '../actions/contextActions';
import { setCurrentChoicesAction, getAllChoicesAction } from '../actions/choiceActions';
import { resetTextAction } from '../actions/UiActions';
import App from '../components/App';
import { saveStateAction, undoStateAction } from '../actions/historyActions';

const mapStateToProps = state => ({
    currentLanguageId: state.intl.locale,
    answers: state.answers,
    questions: state.questions,
    context: state.context,
    flags: state.flags,
    choices: state.choices,
    history: state.history,
});

const mapDispatchToProps = {
    addAnswer: addAnswerAction,
    resetAnswers: resetAnswersAction,
    setQuestions: setQuestionsAction,
    setCategory: setCategoryAction,
    setPlace: setPlaceAction,
    setAllAnswered: setAllAnsweredAction,
    setShowError: setShowErrorAction,
    setErrorMsg: setErrorMsgAction,
    setCurrentQuestion: setCurrentQuestionAction,
    getAllChoices: getAllChoicesAction,
    setCurrentChoices: setCurrentChoicesAction,
    resetText: resetTextAction,
    saveState: saveStateAction,
    undoState: undoStateAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
