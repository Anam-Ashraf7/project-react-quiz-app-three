/* eslint-disable react/prop-types */

import { Component } from "react";
import quizQuestion from "./quizQuestions.json";
import { Link } from "react-router-dom";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answeredQuestions: [],
    };
  }

  checkAnswer = (option) => {
    this.setState({
      answeredQuestions: [...this.state.answeredQuestions, this.props.count],
    });

    if (!this.state.answeredQuestions.includes(this.props.count)) {
      if (option == quizQuestion[this.props.count].answer) {
        alert("Correct answer :)");
        this.props.updateScore();
      } else {
        alert("Wrong answer :(");
        this.props.updateAnswers("wrong");
      }
      this.props.handleCount("right");
      this.props.updateAnswers("attempted");
    } else {
      alert("Already attempted")
    }
  };

  render() {
    return (
      <div id="quiz">
        <h1>Question</h1>
        <p id="question-number">
          {this.props.count + 1} of {quizQuestion.length}
        </p>
        <p>{quizQuestion[this.props.count].question}</p>
        <div
          className="options"
          onClick={(e) => this.checkAnswer(e.target.innerHTML)}
        >
          <button>{quizQuestion[this.props.count].optionA}</button>
          <button>{quizQuestion[this.props.count].optionB}</button>
          <button>{quizQuestion[this.props.count].optionC}</button>
          <button>{quizQuestion[this.props.count].optionD}</button>
        </div>
        <div className="navigation">
          <button
            id="prevBtn"
            onClick={() => {
              this.props.handleCount("left");
            }}
          >
            Prev
          </button>
          <button
            id="nextBtn"
            onClick={() => {
              this.props.handleCount("right");
            }}
          >
            Next
          </button>
          <Link to="/project-react-quiz-app-three/result">
            <button id="finishBtn">Finish</button>
          </Link>
          <Link to="/project-react-quiz-app-three">
            <button
              id="quitBtn"
              onClick={() => {
                confirm("Are you sure you want to quit?");
              }}
            >
              Quit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
