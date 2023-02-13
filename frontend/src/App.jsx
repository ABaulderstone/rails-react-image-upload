import reactLogo from './assets/react.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { UserContextProvider } from './components/UserDetailsProvider';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/posts/new' element={<CreatePost />} />
          <Route path='/posts' element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
