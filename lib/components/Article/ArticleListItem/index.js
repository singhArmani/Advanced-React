import React from 'react';

const ArticleListItem = props => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>{article.body}</div>
      <div>
        <a href={author.website}>
          {author.firstName} - {author.lastName}
        </a>
      </div>
    </div>
  );
};

export default ArticleListItem;
