import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  '@global': {
    body: {
      '&, & .MuiTypography-root, & .MuiAlert-root': {
        direction: ({ lang }) => (lang === 'en' ? 'ltr' : 'rtl'),
      },
    },
  },
  root: {
    color: ({ color }) => color,
  },
}));
