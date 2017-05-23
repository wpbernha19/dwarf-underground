import React, { Component } from 'react'

class ArticleLinks extends Component {
  addComment(e) {
    e.preventDefault();
    console.log(this.commentText.value);
  }

  render() {
    return (
      <div className="article-links">
        <a className="article-link" href="#">
          <i className="fa fa-comments-o"></i>
          <span className="article-link-text">Comments</span>
        </a>
        <a className="article-link" href="#">
          <i className="fa fa-share"></i>
          <span className="article-link-text">Share Post</span>
        </a>
        <form onSubmit={this.addComment.bind(this)}>
          <textarea className="comment" placeholder="Comment Here" ref={(input) => this.commentText = input}></textarea>
          <button type="submit" className="article-link">
            <i className="fa fa-thumb-tack"></i>
            <span className="article-link-text">Submit</span>
          </button>
        </form>
      </div>
    )
  }
}

export default ArticleLinks