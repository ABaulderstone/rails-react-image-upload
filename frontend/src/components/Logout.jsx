import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/user-services';
import { UserContext } from './UserDetailsProvider';

const Logout = () => {
  const { setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    logout()
      .then(() => setUserDetails({ username: null, role: null }))
      .then(() => navigate('/'));
  }, []);
  return <div>Logout</div>;
};

export default Logout;
