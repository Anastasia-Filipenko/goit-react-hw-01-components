import user from 'user.json';
import { Profile } from 'components/Profile/Profile';

import data from 'data.json';
import { Statistics } from 'components/Statistics/Statistics';

import friends from 'friends.json';
import { FriendList } from 'components/FriendList/FriendList';

import transactions from 'transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        margin: '0 auto',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
