import React, {useEffect, useState} from 'react';
import Utils from './Utils';
import './App.css';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(Utils.urls.newsApi)
      .then(resp => resp.json())
      .then(json => {
        setArticles(json.articles);
      });
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
      </div>
    </div>
  );
}

export default App;
