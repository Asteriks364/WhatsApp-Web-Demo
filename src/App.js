import React from 'react';
import Side from './Side'
import Content from "./Content";
import './App.css'

export default function App() {
	return (
		<div className="app__wrapper">
			<div className="app__content">
				<Side/>
				<Content/>
			</div>
		</div>
	);
};