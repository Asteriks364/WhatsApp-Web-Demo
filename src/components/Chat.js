import React, {useContext} from 'react';
import {Context} from '../context';
import AvatarImg from "./AvatarImg";

export default function Chat({chat}) {
	const {openChat} = useContext(Context);

	return (
		<div className={`chat ${chat.isOpen ? 'chat_open' : ''}`}
		     onClick={() => openChat(chat.id)}>
			<div className="chat__user" title={chat.messages[chat.messages.length - 1].text}>
				<div className="chat__avatar">
					<AvatarImg avatar={chat.user.avatar}/>
				</div>
				<div className="chat__info">
					<div className="chat__top-info">
						<div className="chat__top-info-wrap">
							<span title={chat.user.name} className="user__name">{chat.user.name}</span>
						</div>
						<div className="chat__time-last-message">{chat.messages.time}</div>
					</div>
					<div className="chat__last-message">
						<span className="chat__last-message-text">{chat.messages[chat.messages.length - 1].text}</span>
					</div>
				</div>
			</div>
		</div>
	);
}