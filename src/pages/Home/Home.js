import React, { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { loadPhrases } from 'redux/features/phrases.feature';
import { useDispatch, useSelector } from 'react-redux';
// import useStyles from './styles';

function Home() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const lang = useSelector(state => state.language);
  const { list, loading } = useSelector(state => state.phrases);
  console.log({ lang, list, loading });

  useEffect(() => {
    dispatch(loadPhrases());
  }, [dispatch]);

  return (
    <Layout display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={3}>
      Weee
    </Layout>
  );
}

export default Home;
