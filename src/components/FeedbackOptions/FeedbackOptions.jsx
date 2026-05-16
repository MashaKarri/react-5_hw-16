import { ButtonGroup, Button } from "./FeedbackOptions.styled.js";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup>
      {options.map((option) => (
        <Button
          key={option}
          option={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};
