import PropTypes from 'prop-types';
import { List, Item, Img, Chip, TextName } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  console.log(friends[1].isOnline);
  return (
    <List>
      {friends.map(el => (
        <Item key={el.id}>
          {el.isOnline ? (
            <Chip style={{ backgroundColor: 'green' }}></Chip>
          ) : (
            <Chip style={{ backgroundColor: 'red' }}></Chip>
          )}

          <Img src={el.avatar} alt={el.avatar} width="48" />
          <TextName>{el.name}</TextName>
        </Item>
      ))}
    </List>
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
