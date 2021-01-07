import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { loadPhrases } from 'redux/features/phrases.feature';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { itemsPerPage } from 'config/constants';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lang = useSelector(state => state.language);
  const { list, loading } = useSelector(state => state.phrases);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(loadPhrases());
  }, [dispatch]);

  const listSliced = list?.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage);

  return (
    <Layout display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={3}>
      <LoadingSpinner color="secondary" in={loading} timeout={400} unmountOnExit />

      <Grow in={!loading} timeout={400}>
        <div>
          <Paper className={classes.list}>
            <List>
              {listSliced.map((item, i, arr) => (
                <ListItem key={item.key} divider={i !== arr.length - 1}>
                  <ListItemText primary={item[lang]} primaryTypographyProps={{ variant: 'h5' }} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Pagination
            page={page}
            onChange={handleChange}
            count={3}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </div>
      </Grow>
    </Layout>
  );
}

export default Home;
