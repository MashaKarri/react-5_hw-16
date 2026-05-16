import { StatsList, StatsItem } from "./Statistics.styled.js";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsList>
      <StatsItem>Good: {good}</StatsItem>
      <StatsItem>Neutral: {neutral}</StatsItem>
      <StatsItem>Bad: {bad}</StatsItem>
      <StatsItem>Total: {total}</StatsItem>
      <StatsItem>Positive feedback: {positivePercentage}%</StatsItem>
    </StatsList>
  );
};
