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
