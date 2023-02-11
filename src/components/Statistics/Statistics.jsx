import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// function getRandomHexColor() {
//   return `${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className="title">{title}</h2>

      <ul className={css.stat__list}>
        {stats.map(el => (
          <li className={css.item} key={el.id}>
            <span className="label">{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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