import React, { Component } from 'react';

import ArticleList from '../components/Article/ArticleList';
import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(data),
      authors: api.getAuthors(data)
    };
    console.info(this.state);
  }

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          authors={this.state.authors}
        />
      </div>
    );
  }
}

export default App;
