import React from 'react';
import Box from '@material-ui/core/Box';
import LanguageButton from 'components/LanguageButton/LanguageButton';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <LanguageButton />
    </Box>
  );
}

export default Home;
