import reactLogo from './assets/react.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/posts/new' element={<CreatePost />} />
        <Route path='/posts' element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
