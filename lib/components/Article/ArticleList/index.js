import React from 'react';

import ArticleListItem from '../ArticleListItem';

const ArticleList = props => {
  return (
    <div>
      {Object.values(props.articles).map(article => (
        <ArticleListItem
          key={article.id}
          article={article}
          actions={props.articleActions}
        />
      ))}
    </div>
  );
};

export default ArticleList;
