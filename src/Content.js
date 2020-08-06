import React, {useState} from 'react';
import Header from './components/Header'
import ChatWindow from './ChatWindow'

const iconSearch = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
		<path fill="currentColor"
		      d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path>
	</svg>
);

const iconAttach = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
		<path fill="currentColor"
		      d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
	</svg>
);

const iconMenu = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
		<path fill="currentColor"
		      d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
	</svg>
);

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui nunc mattis. Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut aliquam purus sit amet. Nullam non nisi est sit amet facilisis. Massa tincidunt dui ut ornare lectus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non.'

function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

export default function Content() {
	const [user, setUser] = useState({
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dc_user/128.jpg",
		name: "Lupe Rutherford",
		lastVisit: "вчера в 21:13"
	});

	const [messages, setMessages] = useState([
			{
				text: lorem.substr(0, randomInteger(10, 100)),
				time: '20:08',
				type: 'out',
				isRead: true
			},
			{
				text: lorem.substr(0, randomInteger(10, 100)),
				type: 'in',
				time: '20:08',
				isRead: true
			},
			{
				text: lorem.substr(0, randomInteger(10, 100)),
				type: 'out',
				time: '20:10',
				isRead: false
			},
		]
	);
	const [links, setLinks] = useState([
		{
			title: 'Поиск...',
			icon: iconSearch(),
		},
		{
			title: 'Приложить',
			icon: iconAttach(),
		},
		{
			title: 'Меню',
			icon: iconMenu(),
		}
	]);

	return (
		<div className="content">
			<Header user={user}
			        userPrors={true}
			        links={links}/>
			<ChatWindow messages={messages}/>
		</div>
	);
}
