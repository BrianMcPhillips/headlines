import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Loading from '../components/Loading/Loading';

export default class Headlines extends Component {
  state = {
    articles: [],
    loading: true
  }

  componentDidMount = () => {
    fetch(`https://newsapi.org/v2/everything?q=America&apiKey=${process.env.REACT_APP_TOKEN}`)
      .then(res => res.json())
      .then(json => json.articles.map(article => ({
        urlToImage: article.urlToImage,
        title: article.title,
        description: article.description,
        author: article.author,
        url: article.url
      })))
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
