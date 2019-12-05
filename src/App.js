import React, {useEffect, useState} from 'react';
import Utils from './Utils';
import './App.css';



async function fetchArticles() {
  const response = await fetch(Utils.urls.newsApi);
  return await response.json();
}

function App() {

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const retrieve = async () => {
    const data = await fetchArticles();
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
        Header
      </header>
      <div className="App-body">
        {articles.map((article, idx) => {
          return (<div key={idx} className="App-body-article">
            {article.title}
          </div>);
        })}
        {error && (
          <div>
            Error loading articles!
            <input type='button' onClick={retrieve} value="Try Again" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
