import React, {useEffect, useState} from 'react';
import Utils from './Utils';
import './App.scss';

function App() {

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  const retrieve = async () => {
    const response = await fetch(Utils.urls.newsApi);
    const data = await response.json();
    if (data.status === 'ok' && data.articles) {
      const {articles} = data;
      setError(false);
      setArticles(articles);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    retrieve();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Top Stories Today
      </header>
      <div className="App-body">
        {articles.map((article, idx) => {
          return (<div key={idx} className="App-body-article">
            {article.title}
          </div>);
        })}
        {error && (
          <div>
            <h2>Error loading articles!</h2>
            <input type='button' onClick={retrieve} value="Try Again" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
