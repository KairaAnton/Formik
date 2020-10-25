import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/test'>test</Link>
          </li>
        </ul>
      </nav>

      <div>contact page</div>
    </>
  );
};

export default Contact;
