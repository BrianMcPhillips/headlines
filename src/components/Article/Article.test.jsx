import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article 
      urlToImage= "http://placecage.com/200/200"
      title= "Best Article"
      description= "The best article"
      author= "Best Article Writer"
      url= "https://www.bestarticle.com"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
