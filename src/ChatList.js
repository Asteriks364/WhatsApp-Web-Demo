import React, {useState} from 'react';
import Chat from './components/Chat'

export default function ChatList() {
	const [chats, setChats] = useState([
		{
			user: {
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dc_user/128.jpg",
				name: "Lupe Rutherford",
			},
			isOpen: true,
			messages: [
				{
					text: 'Lorem ipsum dolor sit amet',
					type: 'my',
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
		},
		{
			user: {
				name: "Vella",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg",
			},
			isOpen: false,
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
				avatar: "",
				name: "Hank Green",
			},
			isOpen: false,
			messages: [
				{
					text: 'Привет)',
					type: 'you',
				},
			],
		},
		{
			user: {
				name: "Nasir",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/carlosblanco_eu/128.jpg",
			},
			isOpen: false,
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
				name: "Abigail",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/puzik/128.jpg",
			},
			isOpen: false,
			messages: [
				{
					text: 'Привет)',
					type: 'you',
				},
			],
		},
		{
			user: {
				name: "Jed",
				avatar: "",
			},
			isOpen: false,
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
				name: "Donnell",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kianoshp/128.jpg",
			},
			isOpen: false,
			messages: [
				{
					text: 'Привет)',
					type: 'you',
				},
			],
		},
		{
			user: {
				name: "Alysa Kautzer IV",
				avatar: "",
			},
			isOpen: false,
			messages: [
				{
					text: 'Привет)',
					type: 'you',
				},
			],
		},
		{
			user: {
				name: "Stephania Luettgen",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/joshaustin/128.jpg",
			},
			isOpen: false,
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
				name: "Casper",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/peter576/128.jpg",
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
