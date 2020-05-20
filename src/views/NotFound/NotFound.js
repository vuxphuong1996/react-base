import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Sorry, this page isn&apos;t available</h1>
    <p>
      The link you entered may be broken, or the page may have been removed.{' '}
      <Link to="/">Go back to Dashboard</Link>
    </p>
  </div>
);

export default NotFound;
