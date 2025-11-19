import React, { useState } from 'react';
import './Posts.css';

function PostForm({ users, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    user_id: '',
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.user_id || !formData.title || !formData.content) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit({
      ...formData,
      user_id: parseInt(formData.user_id)
    });
    setFormData({ user_id: '', title: '', content: '' });
  };

  return (
    <div className="post-form-container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="user_id">Select User *</label>
          <select
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose a user --</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.username} ({user.email})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Post Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your post content here..."
            rows="6"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Create Post
          </button>
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
