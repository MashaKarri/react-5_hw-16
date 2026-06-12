import { useState, useEffect, useMemo } from "react";

export function useFeedback() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const total = useMemo(() => {
    return feedback.good + feedback.neutral + feedback.bad;
  }, [feedback]);

  const positivePercentage = useMemo(() => {
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  }, [feedback.good, total]);

  useEffect(() => {
    console.log("Feedback updated:", feedback);
  }, [feedback]);

  return { feedback, handleLeaveFeedback, total, positivePercentage };
}
