import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './UserDetailsProvider';

function NavBar() {
  const {
    userDetails: { username, role },
  } = useContext(UserContext);
  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap' }}>
      <NavLink style={{ marginLeft: '1em' }} to='/posts/new'>
        Create Post
      </NavLink>
      <NavLink style={{ marginLeft: '1em' }} to='/posts'>
        All Posts
      </NavLink>
      {username ? (
        <NavLink style={{ marginLeft: '1em' }} to='/logout'>
          Logout
        </NavLink>
      ) : (
        <NavLink style={{ marginLeft: '1em' }} to='/login'>
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
