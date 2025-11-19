import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';

const API_URL = 'http://localhost:3009';

function Posts({ FormComponent, CardComponent }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch posts. Make sure the server is running on port 3000.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const handleAddPost = async (postData) => {
    try {
      await axios.post(`${API_URL}/posts`, postData);
      fetchPosts();
      setShowForm(false);
      setError(null);
    } catch (err) {
      setError('Failed to add post. Please try again.');
      console.error('Error adding post:', err);
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`${API_URL}/posts/${id}`);
        fetchPosts();
        setError(null);
      } catch (err) {
        setError('Failed to delete post. Please try again.');
        console.error('Error deleting post:', err);
      }
    }
  };

  const getUserName = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.username : `User ${userId}`;
  };

  if (loading) {
    return (
      <div className="posts-container">
        <div className="loading-spinner">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h1>Posts Management</h1>
        <button 
          className="btn-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ New Post'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <span>⚠️ {error}</span>
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      {showForm && FormComponent && (
        <FormComponent 
          users={users} 
          onSubmit={handleAddPost}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="posts-stats">
        <div className="stat-card">
          <span className="stat-number">{posts.length}</span>
          <span className="stat-label">Total Posts</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{users.length}</span>
          <span className="stat-label">Total Users</span>
        </div>
      </div>

      <div className="posts-grid">
        {posts.length === 0 ? (
          <div className="empty-state">
            <h2>No posts yet</h2>
            <p>Click "New Post" to create your first post!</p>
          </div>
        ) : (
          CardComponent && posts.map(post => (
            <CardComponent
              key={post.id}
              post={post}
              userName={getUserName(post.user_id)}
              onDelete={handleDeletePost}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;
