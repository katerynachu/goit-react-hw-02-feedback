import { Component } from 'react';
import { FeedbackButton } from './FeedbackButton/FeedbackButton';
import { FeedbackBoard } from './FeedbackBoard/FeedbackBoard';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = total === 0 ? 0 : (good / total) * 100;
    return Math.round(result);
  };
  render() {
    const total = this.countTotalFeedback();
    return (
      <div>
        <p>Please leave feedback</p>
        <FeedbackButton
          onClick={() => this.updateFeedback('good')}
          name={'good'}
        />
        <FeedbackButton
          onClick={() => this.updateFeedback('neutral')}
          name={'neutral'}
        />
        <FeedbackButton
          onClick={() => this.updateFeedback('bad')}
          name={'bad'}
        />
        {total > 0 ? (
          <FeedbackBoard
            percent={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback()}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <p>no feedback given</p>
        )}{' '}
      </div>
    );
  }
}
export default App;
