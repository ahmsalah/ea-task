import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing }) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    margin: spacing(6, 4, 8),
  },
}));
