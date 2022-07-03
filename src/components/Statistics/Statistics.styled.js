import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  padding: ${p => p.theme.space[1]}px;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontsSizes[4]}px;
`;

export const StatisticsList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  font-size: ${p => p.theme.fontsSizes[3]}px;
`;
