import React, {useContext, useState} from 'react';
import {Context} from './context';
import icons from './icons'
import Link from "./components/Link";

export default function Footer() {
	const {chatOpened, sendMessageChat} = useContext(Context);
	const [message, setMessage] = useState();

	const sendMessage = event => {
		if (event && event.key !== 'Enter') return;
		sendMessageChat(chatOpened[0].id, message);
		setMessage('');
	};

	return (
		<footer className="footer">
			<div className="footer__wrap">
				<div className="footer__link">
					<Link title="emoji" icon={icons.emoji()}/>
				</div>
				<label className="search__label">
					<input type="text"
					       className="search__input"
					       placeholder="Введите сообщение"
					       value={message}
					       onChange={event => setMessage(event.target.value)}
					       onKeyPress={sendMessage}></input>
				</label>
				<div className="footer__link">
					{message
						?
						<Link title="отправить"
						      icon={icons.send()}
						      onClick={sendMessage}/>
						:
						<Link title='Голосовое сообщение' icon={icons.voice()}/>
					}
				</div>
			</div>
		</footer>
	);
}