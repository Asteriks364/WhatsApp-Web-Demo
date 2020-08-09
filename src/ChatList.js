import React, {useContext} from 'react';
import {Context} from './context';
import Chat from './components/Chat'

export default function ChatList() {
	const {chats} = useContext(Context);

	return (
		<div className="side__panel">
			<div className="chat-list">
				{chats.map(chat => <Chat key={chat.id} chat={chat}/>)}
			</div>
		</div>
	);
}
