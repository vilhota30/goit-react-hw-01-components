import { Profile } from './Profile/Profile';
import { StatisticList } from './StatisticList/StatisticList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <div
      //  style={{
      //    height: '100vh',
      //    display: 'flex',
      //    justifyContent: 'center',
      //    alignItems: 'center',
      //    fontSize: 40,
      //    color: '#010101'
      //  }}
    >
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList
        title='Upload stats'
        stats={data}
      />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </div>
  );
};

