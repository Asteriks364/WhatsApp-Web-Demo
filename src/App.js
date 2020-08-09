import React, {useState} from 'react';
import {Context} from './context';
import state from './state';
import './App.css'
import Side from './Side'
import Content from "./Content";

export default function App() {
	const [chats, setChats] = useState(state.chats);
	const chatOpened = state.chats.filter(chat => chat.isOpen);

	const openChat = id => {
		setChats(chats.map(chat => {
			(chat.id === id) ? chat.isOpen = true : chat.isOpen = false;
			return chat;
		}))
	};

	const sendMessageChat = (id, message) => {
		const date = new Date();

		function formatData(num) {
			return (num < 10) ? '0' + num : num
		}

		const arDate = [formatData(date.getHours()), formatData(date.getMinutes())];

		setChats(chats.map(chat => {
			if (chat.id === id) {
				chat.messages.push(
					{
						text: message,
						type: 'out',
						time: arDate.join(':'),
						isRead: false
					},
				);
			}
			return chat;
		}))
	};

	return (
		<Context.Provider value={{
			chats, chatOpened, openChat, sendMessageChat
		}}>
			<div className="app__wrapper">
				<div className="app__content">
					<Side/>
					<Content/>
				</div>
			</div>
		</Context.Provider>
	);
};