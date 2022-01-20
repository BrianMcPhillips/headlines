import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList data={[
      {
        urlToImage: 'http://placecage.com/200/200',
        title: 'Best Article',
        description: 'The best article',
        author: 'Best Article Writer',
        url: 'http://bestarticle.com'
      }
    ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
