import PropTypes from 'prop-types';
import {
  BoxProfile,
  BoxInfo,
  TextName,
  Img,
  TextInfo,
  List,
  Item,
  ChipInfo,
  Chip,
} from './User.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <BoxProfile>
      <BoxInfo>
        <Img src={avatar} alt={avatar} width="200" />
        <TextName>{username}</TextName>
        <TextInfo>@{tag}</TextInfo>
        <TextInfo>{location}</TextInfo>
      </BoxInfo>

      <List>
        <Item>
          <ChipInfo>Followers</ChipInfo>
          <Chip>{followers}</Chip>
        </Item>
        <Item>
          <ChipInfo>Views</ChipInfo>
          <Chip>{views}</Chip>
        </Item>
        <Item>
          <ChipInfo>Likes</ChipInfo>
          <Chip>{likes}</Chip>
        </Item>
      </List>
    </BoxProfile>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
