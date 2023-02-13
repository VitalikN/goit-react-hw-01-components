import PropTypes from 'prop-types';

import {
  Container,
  Title,
  StatList,
  Item,
  ChipInfo,
  Chip,
} from './Statistics.styled';

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(el => (
          <Item key={el.id} style={{ backgroundColor: getRandomHexColor() }}>
            <ChipInfo>{el.label}</ChipInfo>
            <Chip>{el.percentage}%</Chip>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
