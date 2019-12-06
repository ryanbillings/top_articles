import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

function Article(props) {
  const classes = useStyles();

  return (
    <GridListTile style={{...props.style}}>
      <img src={props.urlToImage} alt={props.title} />,
      <GridListTileBar
        title={props.title}
        subtitle={<span>by: {props.sourceName}</span>}
        actionIcon={
          <IconButton>
            <InfoIcon className={classes.icon}/>
          </IconButton>
        }
      />
    </GridListTile>
  );
};

export default Article;