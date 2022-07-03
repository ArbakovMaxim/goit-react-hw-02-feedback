import { StatisticsItem, StatisticsList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {totalFeedback}</StatisticsItem>
      <StatisticsItem>Positive feedbeack: {positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
