import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

function LoadingSpinner({ color, size, thickness, spinnerProps, ...transitionProps }) {
  const classes = useStyles();

  return (
    <Collapse {...transitionProps} mountOnEnter unmountOnExit>
      <Box className={classes.spinner} {...spinnerProps}>
        <CircularProgress size={size} thickness={thickness} color={color} />
      </Box>
    </Collapse>
  );
}

LoadingSpinner.defaultProps = {
  color: 'secondary',
  size: 90,
  thickness: 3.6,
};

export default memo(LoadingSpinner);
