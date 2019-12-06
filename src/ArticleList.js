import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Article from './Article';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80%",
    height: "100%"
  }
}));

function ArticleList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.articles.map((article, idx) => {
          return (
            <Article
              key={idx}
              urlToImage={article.urlToImage}
              title={article.title}
              sourceName={article.source.name}
              style={{...props.style}}
            />
          );
        })}
      </GridList>
    </div>
  );
}

export default ArticleList;