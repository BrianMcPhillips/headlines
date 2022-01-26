import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';

const ArticleList = ({ data }) => {
  const articleElements = data.map(article => (
    <li key={article.url}>
      <Article {...article}/>
    </li>
  ));
  return (
    <ul data-testid="articles">
      {articleElements }
    </ul>
  );
};

ArticleList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
