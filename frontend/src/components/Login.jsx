import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserDetailsProvider';
import { login } from '../services/user-services';

const Login = () => {
  const { setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    login(formState)
      .then((response) => setUserDetails(response))
      .then(() => navigate('/'));
  };

  const [formState, setFormState] = useState({ email: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>email</label>
        <input onChange={onChange} type='text' name='email' />
      </div>
      <div>
        <label>Password</label>
        <input onChange={onChange} type='password' name='password' />
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

export default Login;
