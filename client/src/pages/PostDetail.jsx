import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../components/services/PostsApi';
import LanguageDropdown from '../components/LanguageDropdown';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../components/services/PostsApi';
import './PostDetail.css';

export default function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [language, setLanguage] = useState('en');
  const [translatedBody, setTranslatedBody] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [cache, setCache] = useState({});

  const navigate = useNavigate();

  async function handleDelete() {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this post?'
    );
    if (!confirmDelete) return;

    await deletePost(id);
    navigate('/');
  }

  async function fetchTranslation(lang) {
    setIsTranslating(true);

    const res = await fetch(`http://localhost:3001/posts/${id}?lang=${lang}`);
    const data = await res.json();

    setTranslatedBody(data.translatedBody);

    // Cache the translation
    setCache((prev) => ({
      ...prev,
      [lang]: data.translatedBody,
    }));

    setIsTranslating(false);
  }

  function handleLanguageChange(lang) {
    setLanguage(lang);

    if (lang === 'en') {
      setTranslatedBody('');
      return;
    }

    // Use cached translation if available
    if (cache[lang]) {
      setTranslatedBody(cache[lang]);
      return;
    }

    // Otherwise fetch from backend
    fetchTranslation(lang);
  }

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) return <p>Post data is loading, please wait...</p>;

  return (
    <div className="post-detail-container">
      <LanguageDropdown value={language} onChange={handleLanguageChange} />

      <div className="post-detail-card">
        <img
          src={
            post.image_url ||
            'https://via.placeholder.com/800x400?text=Fashion+Drama'
          }
          alt={post.title}
          className="post-detail-image"
        />

        <div className="post-detail-content">
          <h1 className="post-detail-title">{post.title}</h1>
          <p className="post-detail-author">By {post.author || 'Unknown'}</p>

          <p className="post-detail-body">
            {language === 'en'
              ? post.body
              : isTranslating
              ? 'Translating...'
              : translatedBody}
          </p>
          <div className="post-detail-footer">
            {/* Centered Back Link */}
            <div className="footer-center">
              <Link to="/" className="back-link">
                ← Back to Posts
              </Link>
            </div>

            {/* Right-side Edit + Delete */}
            <div className="footer-right">
              <Link to={`/edit/${id}`} className="action-btn">
                Edit
              </Link>

              <button className="action-btn" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
