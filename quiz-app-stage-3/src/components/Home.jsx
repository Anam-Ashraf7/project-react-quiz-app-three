/* eslint-disable react/prop-types */
import { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {

    constructor(props) {
      super(props)
    }

  render() {
    return (
      <div id='home'>
        <h1>Quiz App</h1>
        <Link to="/project-react-quiz-app-three/quiz">
            <button onClick={()=> {
                this.props.setCount(0)
                this.props.setScore(0)
                this.props.setquestionAnswered({
                    ...this.props.questionAnswered,
                    WrongAnswers: 0,
                    Attempted:0
                })
            }}>Play</button>
        </Link>
      </div>
    )
  }
}
