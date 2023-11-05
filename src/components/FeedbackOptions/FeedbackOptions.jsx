import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
import { Board } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Board>
      {options.map(option => (
        <FeedbackButton
          key={option}
          onClick={() => onLeaveFeedback(option )}
          name={option}
        />
      ))}
    </Board>
  );
};
