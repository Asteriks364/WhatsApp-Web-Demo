import React from 'react';
import Side from './Side/Side'
import './Side/Side.css'
import Content from "./Content/Content";
import './Content/Content.css'

function App() {
	return (
	  <div className="app__wrapper">
		  <div className="app__content">
			  <Side/>
			  <Content/>
		  </div>
	  </div>
	);
}

export default App;
