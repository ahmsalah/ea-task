import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing }) => ({
  spinner: {
    textAlign: 'center',
    '& > div': {
      margin: spacing(4, 2),
    },
  },
}));
