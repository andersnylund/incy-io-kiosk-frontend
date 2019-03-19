import { connect } from 'react-redux';
import QuestionPage from '../components/QuestionPage';
import { addAnswerAction } from '../actions/answerActions';
import { setSelectedChoicesAction } from '../actions/choiceActions';
import { undoStateAction } from '../actions/historyActions';


const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    text: state.ui.freeText.text,
    error: state.flags.error,
    selectedChoices: state.choices.selectedChoices,
});

const mapDispatchToProps = {
    addAnswer: addAnswerAction,
    setSelectedChoices: setSelectedChoicesAction,
    goBack: undoStateAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
