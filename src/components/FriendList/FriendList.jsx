import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <li className="item" key={el.id}>
          <span className="status">{el.isOnline}</span>
          <img className="avatar" src={el.avatar} alt={el.avatar} width="48" />
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
