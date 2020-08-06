import React from 'react';
import Message from './components/Message'

export default function ChatWindow({messages}) {
	return (
		<div className="chat-window">
			<div className="chat-window__wrap">
				<div className="chat-window__indent"></div>
				<div className="chat-window__list">
					{messages.map((message, index) => <Message key={index} message={message}/>)}
				</div>
			</div>
		</div>
	);
}
