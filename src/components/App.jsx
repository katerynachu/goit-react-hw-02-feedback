import { useState} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = key => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [key]: prevFeedback[key] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    const result = total === 0 ? 0 : (good / total) * 100;
    return Math.round(result);
  };

  const total = countTotalFeedback();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={updateFeedback}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            percent={countPositiveFeedbackPercentage()}
            total={total}
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
      <GlobalStyle />
    </div>
  );
};

