import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../Article/ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();

    // writing our expectotion
    expect(tree.children.length).toBe(2);

    expect(tree).toMatchSnapshot();
  });
});
