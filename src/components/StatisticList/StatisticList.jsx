import PropTypes from 'prop-types';
import {
  StatisticsItem,
  StatisticsLabel,
  StatisticsList, StatisticsPercentage,
  StatisticsSection,
  StatisticsTitle,
} from './StatisticList.styled';

export function StatisticList({ stats, title }) {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({id, label, percentage}) => (
          <StatisticsItem key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>


  );
}

StatisticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  )
}
