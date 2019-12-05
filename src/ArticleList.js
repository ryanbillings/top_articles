import React from 'react';

function ArticleList(props) {
  return (
    <div>
    {props.articles.map((article, idx) => {
      return (
        <div key={idx} className="App-body-article">
          {article.title}
        </div>
      );
    })}
    </div>
  );
}

export default ArticleList;