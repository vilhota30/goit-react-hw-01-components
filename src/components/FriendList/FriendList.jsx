import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import { Friends } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </Friends>
  );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
