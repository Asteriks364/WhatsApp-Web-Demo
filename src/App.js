import React, {useEffect, useState} from 'react';
import {Context} from './context';
import state from './state';

import {Side} from './Side'
import {Content} from "./Content";
import './App.css'

export function App() {
	/* Список чатов */
	const [chats, setChats] = useState(state.chats);
	/* Открытый чат */
	const [chatOpened, setChatOpened] = useState(state.chats.filter(chat => chat.isOpen));

	/* Запись в объект чатов из localStorage */
	useEffect(() => {
		const raw = localStorage.getItem('chats');
		if (raw) {
			setChats(JSON.parse(raw));
			setChatOpened(chats.filter(chat => chat.isOpen))
		}
	}, []);

	/* Запись объекта чатов в localStorage */
	useEffect(() => {
		localStorage.setItem('chats', JSON.stringify(chats));
	}, [chats]);

	/* Открытие чата по клику в списке чатов */
	const openChat = id => {
		setChats(chats.map(chat => {
			(chat.id === id) ? chat.isOpen = true : chat.isOpen = false;
			return chat;
		}));
		setChatOpened(chats.filter(chat => chat.isOpen))
	};

	/* Ввод текста в поле отправки сообщения */
	const writeNewMessageChat = (id, message) => {
		setChats(chats.map(chat => {
			if (chat.id === id) {
				chat.newMessage = message;
			}
			return chat;
		}));
	};

	/* Отправка сообщения */
	const sendMessageChat = (id, message) => {
		const date = new Date();

		function formatData(num) {
			return (num < 10) ? '0' + num : num
		}

		const arDate = [formatData(date.getHours()), formatData(date.getMinutes())];

		let newChats = chats.map(chat => {
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
		});

		setChats(newChats.filter(chat => chat.id === id).concat(chats.filter(chat => chat.id !== id)));
	};

	return (
		<Context.Provider value={{
			chats, chatOpened, openChat, sendMessageChat, writeNewMessageChat
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