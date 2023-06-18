import PropTypes from 'prop-types';
import { Friend, FriendAvatar, FriendName, FriendStatus } from './FriendItem.styled';

export function FriendItem({ friend: { avatar, name, isOnline } }) {
  return (
    <Friend>
      <FriendStatus typeName={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} width='48' />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}


FriendItem.propTypes = {
  friend: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    },
  ).isRequired,
};
