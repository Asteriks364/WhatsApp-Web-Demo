import React, {useContext} from 'react';
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';
import {Context} from './context';
import Chat from './components/Chat'

export default function ChatList() {
	const {chats} = useContext(Context);

	return (
		<div className="side__panel">
			<TransitionGroup className="chat-list">
				{chats.map(chat => (
					<CSSTransition
						key={chat.id}
						timeout={5000}
						classNames="item"
					>
						<Chat chat={chat}/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
}
