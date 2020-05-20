import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setCurrentUser } from './store/actions/userActions';
import { Routes } from './route';

const App = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
