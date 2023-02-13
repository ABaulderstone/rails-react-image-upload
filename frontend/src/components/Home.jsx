import React, { useContext } from 'react';
import { UserContext } from './UserDetailsProvider';

const Home = () => {
  const {
    userDetails: { username },
  } = useContext(UserContext);
  return <div>Welcome {username || 'guest'}</div>;
};

export default Home;
