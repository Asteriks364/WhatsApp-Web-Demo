import React from 'react';
import state from './state';
import Header from './components/Header'
import Search from './components/Search'
import ChatList from './ChatList'

export function Side() {
	const links = [
		state.links.status,
		state.links.newChat,
		state.links.menu,
	];

	return (
		<div className="side">
			<Header user={state.user} links={links}/>
			<Search/>
			<ChatList/>
		</div>
	);
};
