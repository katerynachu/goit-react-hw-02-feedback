import { Component } from "react";
import { FeedbackButton } from "./FeedbackButton/FeedbackButton";
import { FeedbackBoard } from "./FeedbackBoard/FeedbackBoard";
class App extends Component  {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  updateFeedback = (key) => {
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  }
  render() {
    return(
      <div>
   <p>Please leave feedback</p>
      <FeedbackButton onClick={() => this.updateFeedback('good')} name={'good'}/>
      <FeedbackButton  onClick={() => this.updateFeedback('neutral')}  name={'neutral'}/>
      <FeedbackButton  onClick={() => this.updateFeedback('bad')}   name={'bad'}/>
      <FeedbackBoard good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
    </div>
    )
  }

}
export default App;

