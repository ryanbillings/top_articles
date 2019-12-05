import React, {useEffect, useState} from 'react';

// Material UI Components
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Our Components
import Utils from './Utils';
import ArticleList from './ArticleList';
import './App.scss';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3)
  },
}));

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

  const classes = useStyles();

  return (
    <div className="App">
      <Paper className={classes.root}>
        <header className="App-header">
          <Typography variant="h3" component="h1">
            Top Stories Today
          </Typography>
        </header>
        <div className="App-body">
          <ArticleList articles={articles} />
          {error && (
            <div>
              <Typography variant="h2">
                Error loading articles!
              </Typography>
              <Button onClick={retrieve}>
                Try Again
              </Button>
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
}

export default App;
