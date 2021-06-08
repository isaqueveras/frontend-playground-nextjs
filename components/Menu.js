import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBack from '@material-ui/icons/ArrowBack';

import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row'
  },
  playground: {
    fontWeight: 'normal'
  },
  AppBar: {
    minWidth: '100vw',
    boxShadow: 'none',
  },
  avatar: {
    width: 40,
    borderRadius: 20
  }
}));

export default function Menu({title, isHome}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static" className={classes.AppBar}>
        <Toolbar>
          {isHome == false && (
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Link href="/">
                <ArrowBack />
              </Link>
            </IconButton>
          )}
          
          <Typography variant="h6" className={classes.title}>
            <div className={classes.playground}>Playground /&nbsp;</div> {title}
          </Typography>
          
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <img src="https://avatars.githubusercontent.com/u/46972789?v=4" className={classes.avatar} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}