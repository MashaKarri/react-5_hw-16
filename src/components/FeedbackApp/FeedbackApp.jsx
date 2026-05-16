import { useState, useEffect } from "react";
import { Section } from "../Section/Section.jsx";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions.jsx";
import { Statistics } from "../Statistics/Statistics.jsx";
import { Notification } from "../Notification/Notification.jsx";

export function FeedbackApp() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedback((previous) => ({
      ...previous,
      [option]: previous[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((feedback.good / total) * 100);
  };

  const { good, neutral, bad } = feedback;

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  useEffect(() => {
    console.log("Feedback updated:", feedback);
  }, [feedback]);

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
