import React from 'react';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
}));

export default function ArticleModal(props) {

  const classes = useStyles();

  return (
    <div>
      <Dialog open>
        <DialogTitle className={classes.root}>
          <Typography component="div" variant="h6">{props.title}</Typography>
          <IconButton className={classes.closeButton} onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.description}
          </Typography>
          <DialogActions>
            <Link target="_blank" href={props.url}>
              Read full story
            </Link>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}