import React from 'react';
import ReactDOM from 'react-dom';
import GetQuestion from './service'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import './index.css'
import Button from '@material-ui/core/Button'

const TestButton = ({ clickAction, name }) => (
  <Button variant="contained"  style={{padding: '3rem', margin: '3rem'}} onClick = {clickAction} >{name}</Button>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      observationQuestions: []
    }
  }

  clickGet = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    GetQuestion().then((questions) => {
      this.setState({
        observationQuestions: questions
      })
    })
  }

  render () {

    const displayedText = () => {
      if ((this.state.counter) === 0) {
        return (
          <div>
            <Typography variant='h1'>Button not yet pushed</Typography>
          </div>
        )
      }
      if (this.state.observationQuestions.length !== 0) {
      return (
        <div>
          <Typography variant='h1'>
            {this.state.observationQuestions.find(function(question) {
            return question.position === 1;
            }).name}
          </Typography>
        </div> // ^^^ Finds the question with the position 1
      )
      }
    }

    return (
      <div>
        <div>{displayedText()}</div>
        <TestButton clickAction = {this.clickGet} name = "GET" />
      </div>
    )
  }
}

export default App
ReactDOM.render(
<React.Fragment>
  <CssBaseline />
  <App />
</React.Fragment>, 
document.getElementById('root'));