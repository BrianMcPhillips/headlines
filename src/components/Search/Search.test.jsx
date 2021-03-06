import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search', () => {
    const { asFragment } = render(<Search 
      searchTerm="searching"
      handleSearch={() => {}}
      handleSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
