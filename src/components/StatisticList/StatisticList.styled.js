import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 400px;
  margin: 50px auto;
  padding: 5px;
  box-shadow: 5px 5px 20px 10px rgba(75, 75, 75, 0.75);
  border-radius: 5px;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: rgba(75, 75, 75, 0.75);
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  border: 1px solid grey;
  text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
  width: 100%;
  padding: 20px;
  background-color: ${() => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }};
`;

export const StatisticsLabel = styled.span`
  display: block;
  text-align: center;
`;

export const StatisticsPercentage = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
`;
