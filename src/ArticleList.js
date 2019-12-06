import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
  const theme = useTheme();

  // Responsive styling. 
  // useMediaQuery is a hook thus needs to be called sequentially
  let gridStyles = {cols: 3, height: 200};
  if(useMediaQuery(theme.breakpoints.down('md'))){
    gridStyles.cols = 2;
    gridStyles.height = 300;
  }
  if (useMediaQuery(theme.breakpoints.down('sm'))){
    gridStyles.cols = 1;
    gridStyles.height = 350;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={gridStyles.height} className={classes.gridList} cols={gridStyles.cols}>
        {props.articles.map((article, idx) => {
          return (
            <Article
              key={idx}
              onSelectArticle={props.onSelectArticle}
              style={{...props.style}}
              {...article}
            />
          );
        })}
      </GridList>
    </div>
  );
}

export default ArticleList;