export const getArticles = (term) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=${process.env.REACT_APP_TOKEN}`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      urlToImage: article.urlToImage,
      title: article.title,
      description: article.description,
      author: article.author,
      url: article.url
    })));
};
