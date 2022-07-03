import {
  StatisticsItem,
  StatisticsList,
  StatisticsTitle,
  StatisticsWrapper,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <StatisticsWrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {totalFeedback}</StatisticsItem>
        <StatisticsItem>
          Positive feedbeack: {positivePercentage}%
        </StatisticsItem>
      </StatisticsList>
    </StatisticsWrapper>
  );
};
