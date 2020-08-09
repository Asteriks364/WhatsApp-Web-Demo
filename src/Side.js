import React, {useState} from 'react';
import state from './state';
import Header from './components/Header'
import Search from './components/Search'
import ChatList from './ChatList'

export default function Side() {
	const [links, setLinks] = useState([
		state.links.status,
		state.links.newChat,
		state.links.menu,
	]);

	const [user, setUser] = useState(state.user);

	return (
		<div className="side">
			<Header user={user} links={links}/>
			<Search/>
			<ChatList/>
		</div>
	);
};
