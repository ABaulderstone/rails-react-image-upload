import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap' }}>
      <NavLink style={{ marginLeft: '1em' }} to='/posts/new'>
        Create Post
      </NavLink>
      <NavLink style={{ marginLeft: '1em' }} to='/posts'>
        All Posts
      </NavLink>
    </nav>
  );
}

export default NavBar;
