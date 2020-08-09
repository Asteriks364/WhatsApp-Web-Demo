import React, {useContext, useState} from 'react';
import {Context} from './context';
import state from "./state";
import Header from './components/Header'
import ChatWindow from './ChatWindow'
import Footer from './Footer'

export default function Content() {
	const {chats} = useContext(Context);
	const chatOpen = chats.filter(chat => chat.isOpen);

	const [links, setLinks] = useState([
		state.links.search,
		state.links.attach,
		state.links.menu,
	]);

	return (
		<div className="content">
			{chatOpen.length > 0 ? (
				<div className="content__wrap">
					<Header user={chatOpen[0].user}
					        userPrors={true}
					        links={links}/>
					<ChatWindow messages={chatOpen[0].messages}/>
					<Footer/>
				</div>
			) : (
				<div>

				</div>
			)
			}
		</div>
	);
};