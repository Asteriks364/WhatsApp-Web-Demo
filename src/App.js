import React from 'react';
import Side from './Side/Side'
import Content from "./Content/Content";
import './Side/Side.css'
import './Content/Content.css'

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