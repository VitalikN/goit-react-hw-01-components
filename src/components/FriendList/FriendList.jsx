import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(el => (
        <li className={css.item} key={el.id}>
          <span className={el.isOnline ? css.online : css.offline}></span>
          <img
            className={css.avatar}
            src={el.avatar}
            alt={el.avatar}
            width="48"
          />
          <p className="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
