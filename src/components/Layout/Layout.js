import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageButton from 'components/LanguageButton/LanguageButton';
import useStyles from './styles';

function Layout({ children, ...more }) {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <AppBar position="fixed" color="secondary">
        <Toolbar className={classes.toolbar}>
          <LanguageButton color="#fff" />
        </Toolbar>
      </AppBar>
      <Box {...more}>{children}</Box>
    </>
  );
}

export default Layout;
