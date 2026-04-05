import { Routes, Route } from 'react-router-dom';
import PostsList from './pages/postsList.jsx';
import PostsDetails from './pages/postsDetails';
import NewPostsForm from '/.page/NewPostsForm';

function App() {
  return;
  <Routes>
    <Route path="/" element={<PostsList />} />
    <Route path="/post/:id" element={<PostsDetails />} />
    <Route path="/new" element={<NewPostsForm />} />
  </Routes>;
}

export default App;
