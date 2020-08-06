import React, {useState} from 'react';
import Chat from '../components/Chat'

export default function Panel() {
	const [chats, setChats] = useState([
		{
			user: {
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dc_user/128.jpg",
				name: "Lupe Rutherford",
			},
			isOpen: true,
			messages: [
				{
					text: 'Привет! Как дела',
					type: 'my',
					isRead: true
				},
				{
					text: 'Хорошо',
					type: 'user',
					isRead: true
				},
			],
		},
		{
			user: {
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guischmitt/128.jpg",
				name: "Wiley Cummings"
			},
			isOpen: false,
			messages: [
				{
					text: 'Привет)',
					type: 'you',
				},
			],
		}
	]);

	return (
		<div className="side__panel">
			<div className="chat-list">
				{chats.map((chat, index) => <Chat key={index} chat={chat}/>)}
			</div>
		</div>
	);
}
