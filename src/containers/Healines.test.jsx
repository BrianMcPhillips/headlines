import React from 'react';
import { render, screen } from '@testing-library/react';
import Headlines from './Headlines';
import { getArticles } from '../services/news-api.js';

jest.mock('../services/news-api.js');

describe('Headlines component', () => {
  it('displays a loading screen at page load', () => {
    getArticles.mockResolvedValue([
      {
        urlToImage: 'http://placeholder.com/villager',
        title: 'Best article ever',
        description: 'This is beyond a great article so insightful',
        author: 'test testerson',
        url: 'www.test.com'
      },
      {
        urlToImage: 'http://placeholder.com/villager',
        title: 'Second best article ever',
        description: 'This is a another great article so insightful',
        author: 'test testerson the third',
        url: 'www.test2.com'
      }
    ]);
    render(<Headlines />);

    screen.getByAltText('Loading');
  });

  it('displays a list of headlines', () => {
    getArticles.mockResolvedValue([
      {
        urlToImage: 'http://placeholder.com/villager',
        title: 'Best article ever',
        description: 'This is beyond a great article so insightful',
        author: 'test testerson',
        url: 'www.test.com'
      },
      {
        urlToImage: 'http://placeholder.com/villager',
        title: 'Second best article ever',
        description: 'This is a another great article so insightful',
        author: 'test testerson the third',
        url: 'www.test2.com'
      }
    ]);      


  });
});

