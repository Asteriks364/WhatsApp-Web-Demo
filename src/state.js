import {randomInteger, randomText} from "./random";
import icons from "./icons";

const state = {
	chats: [
		{
			id: 1,
			user: {
				name: "Lupe Rutherford",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dc_user/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 2,
			user: {
				name: "Wiley Cummings",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guischmitt/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 3,
			user: {
				name: "Vella",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 4,
			user: {
				name: "Hank Green",
				avatar: "",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 5,
			user: {
				name: "Abigail",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/puzik/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 6,
			user: {
				name: "Jed",
				avatar: "",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 7,
			user: {
				name: "Donnell",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kianoshp/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 8,
			user: {
				name: "Alysa Kautzer IV",
				avatar: "",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 9,
			user: {
				name: "Stephania Luettgen",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/joshaustin/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 10,
			user: {
				name: "Casper",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/peter576/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
		{
			id: 11,
			user: {
				name: "Nasir",
				avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/carlosblanco_eu/128.jpg",
				lastVisit: "вчера в 20:10"
			},
			isOpen: false,
			messages: [
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					time: '20:08',
					type: randomInteger(0, 1) ? 'out' : 'in',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:08',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:09',
					isRead: true
				},
				{
					text: randomText(),
					type: randomInteger(0, 1) ? 'out' : 'in',
					time: '20:10',
					isRead: false
				},
			],
		},
	],
	user: {
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/themikenagle/128.jpg",
	},
	links: {
		status: {
			title: 'Статус',
			icon: icons.status(),
		},
		newChat: {
			title: 'Новый чат',
			icon: icons.newChat(),
		},
		menu: {
			title: 'Меню',
			icon: icons.menu(),
		},
		search: {
			title: 'Поиск...',
			icon: icons.search(),
		},
		attach: {
			title: 'Приложить',
			icon: icons.attach(),
		},
	}
};

export default state;