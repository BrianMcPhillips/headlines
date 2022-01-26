import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Loading from '../components/Loading/Loading';
import Search from '../components/Search/Search';
import { getArticles } from '../services/news-api';

export default class Headlines extends Component {
  state = {
    articles: [],
    loading: true,
    searchTerm: ''
  }

  componentDidMount = () => {
    getArticles()
      .then(articles => this.setState({ articles, loading: false })); 
  }

  handleSearch = ({ target }) => {
    this.setState({ searchTerm: target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    getArticles(this.state.searchTerm)
      .then(articles => this.setState({ articles, loading: false }));
  }

  render() {
    const { articles, loading, searchTerm } = this.state;
    if(loading) return <Loading />;
    return (
      <div>
        <Search 
          searchTerm={searchTerm} 
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />
        <ArticleList data={articles}/>
      </div>
    );
  }
}
