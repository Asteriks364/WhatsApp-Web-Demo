import React, {useState} from 'react';
import {Context} from './context';
import state from './state';
import Side from './Side'
import Content from "./Content";
import './App.css'

export default function App() {
	const [chats, setChats] = useState(state.chats);

	const openChat = id => {
		setChats(chats.map(chat => {
			(chat.id === id) ? chat.isOpen = true : chat.isOpen = false;
			return chat;
		}))
	};

	return (
		<Context.Provider value={{
			chats, openChat
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