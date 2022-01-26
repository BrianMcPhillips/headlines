import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Loading from '../components/Loading/Loading';
import { getArticles } from '../services/news-api';

export default class Headlines extends Component {
  state = {
    articles: [],
    loading: true
  }

  componentDidMount = () => {
    getArticles()
      .then(articles => this.setState({ articles, loading: false })); 
  }
  render() {
    const { articles, loading } = this.state;
    if(loading) return <Loading />;
    return (
      <div>
        <ArticleList data={articles}/>
      </div>
    );
  }
}
