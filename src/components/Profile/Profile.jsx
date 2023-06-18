import PropTypes from 'prop-types';
import {
  UserProfile,
  UserThumb,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  Stat,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (<UserProfile>
    <UserThumb>
      <UserAvatar
        src={avatar}
        alt={username}
        className='avatar'
      />
      <UserName>{username}</UserName>
      <UserTag>{tag}</UserTag>
      <UserLocation className='location'>{location}</UserLocation>
    </UserThumb>

    <UserStats>
      <Stat>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </Stat>
      <Stat>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </Stat>
      <Stat>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </Stat>
    </UserStats>
  </UserProfile>);
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};