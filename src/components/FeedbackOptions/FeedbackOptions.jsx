import { ButtonFeedback, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => {
        return (
          <ButtonFeedback
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </ButtonFeedback>
        );
      })}
    </ButtonWrapper>
  );
};
