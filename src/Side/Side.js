import React from 'react';
import Header from './Header'
import Search from './Search'
import Panel from './Panel'

export default function Side() {
	return (
		<div className="side">
			<Header/>
			<Search/>
			<Panel/>
		</div>
	);
};
