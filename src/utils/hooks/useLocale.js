import languages from 'locale';
import { useSelector } from 'react-redux';

export default function useLocale() {
  const lang = useSelector(state => state.language);
  return languages[lang];
}
