import React from 'react';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import { changeLanguage } from 'redux/features/language.feature';
import { useDispatch, useSelector } from 'react-redux';
import useLocale from 'utils/hooks/useLocale';
import useStyles from './styles';

function LanguageButton({ size, color, ...props }) {
  const dispatch = useDispatch();
  const locale = useLocale();
  const lang = useSelector(state => state.language);
  const classes = useStyles({ lang, color });

  return (
    <Button
      size={size}
      className={classes.root}
      startIcon={<LanguageIcon />}
      onClick={() => dispatch(changeLanguage())}
      {...props}
    >
      {locale?.language}
    </Button>
  );
}

LanguageButton.defaultProps = {
  color: '#000',
  size: 'medium',
};

export default LanguageButton;
