import React from 'react';
import './Posts.css';

function PostCard({ post, userName, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="post-card">
      <div className="post-card-header">
        <div className="post-author">
          <div className="author-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="author-info">
            <h3>{userName}</h3>
            <span className="post-date">{formatDate(post.created_at)}</span>
          </div>
        </div>
        <button 
          className="btn-delete" 
          onClick={() => onDelete(post.id)}
          title="Delete post"
        >
          🗑️
        </button>
      </div>

      <div className="post-card-body">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </div>

      <div className="post-card-footer">
        <span className="post-id">Post #{post.id}</span>
      </div>
    </div>
  );
}

export default PostCard;
