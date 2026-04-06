import { Routes, Route } from 'react-router-dom';
import PostsList from './pages/PostsList.jsx';
import PostDetail from './pages/PostDetail.jsx';
import NewPostForm from './pages/NewPostForm.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/new" element={<NewPostForm />} />
    </Routes>
  );
}

export default App;
