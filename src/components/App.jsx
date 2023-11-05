import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              percent={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
        <GlobalStyle/>
      </div>
    );
  }
}
export default App;
