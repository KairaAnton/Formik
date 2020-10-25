import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/test">test</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>

      <div>home page</div>
    </>
  );
};

export default Home;
