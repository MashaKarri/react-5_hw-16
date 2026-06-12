import { useFeedback } from "../../hooks/useFeedback.js";
import { Section } from "../Section/Section.jsx";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions.jsx";
import { Statistics } from "../Statistics/Statistics.jsx";
import { Notification } from "../Notification/Notification.jsx";

export function FeedbackApp() {
  const { feedback, handleLeaveFeedback, total, positivePercentage } =
    useFeedback();

  const { good, neutral, bad } = feedback;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
