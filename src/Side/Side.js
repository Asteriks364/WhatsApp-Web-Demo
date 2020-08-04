import React from 'react';
import Header from './Header'

const Search = () => (
  <div className="side__search">

  </div>
);

const Panel = () => (
  <div className="side__panel">

  </div>
);

const Side = () => (
  <div className="side">
	  <Header/>
	  <Search/>
	  <Panel/>
  </div>
);

export default Side;
