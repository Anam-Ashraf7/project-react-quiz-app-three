/* eslint-disable react/prop-types */
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Result extends Component {

    constructor(props) {
      super(props)
      console.log(props)
    }

  render() {
    return (
      <div id='result-container'>
        <h1 id='result-title'>Result</h1>
        <div id='result'>
            <p>You need more practice!</p>
            <h1>Your score is {this.props.score}</h1>
            <div id='quiz-details'>
                <div className='flex'>
                    <p>Total Number Of Questions</p> 
                    <p>{this.props.count+1}</p>
                </div>
                <div className='flex'>
                    <p>Number Of Attempted Questions</p> 
                    <p>{this.props.questionAnswered.Attempted}</p>
                </div>
                <div className='flex'>
                    <p>Number Of Correct Answers</p> 
                    <p>{this.props.score}</p>
                </div>
                <div className='flex'>
                    <p>Number Of Wrong Answers</p> 
                    <p>{this.props.questionAnswered.WrongAnswers}</p>
                </div>  
            </div>
        </div>
        <div>
            <Link to="/quiz">
                <button id='playAgain'onClick={()=> {
                this.props.setCount(0)
                this.props.setScore(0)
                this.props.setquestionAnswered({
                    ...this.props.questionAnswered,
                    WrongAnswers: 0,
                    Attempted:0
                })
            }}>Play Again</button>
            </Link>
            <Link to="/">
                <button id='goHome'>Back To Home</button>
            </Link>
        </div>
      </div>
    )
  }
}
