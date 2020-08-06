import React from 'react';
import AvatarImg from "./AvatarImg";

class Chat extends React.Component {
	state = {
		isOpen: this.props.chat.isOpen,
	};

	openChat = () => {
		this.setState((state) => {
			return {
				isOpen: !state.isOpen
			};
		});
	};

	render() {
		const chat = this.props.chat;

		return (
			<div className={`chat ${this.state.isOpen ? 'chat_open' : ''}`}
			     onClick={this.openChat}>
				<div className="chat__user" title={chat.messages[chat.messages.length - 1].text}>
					<div className="chat__avatar">
						<AvatarImg avatar={chat.user.avatar}/>
					</div>
					<div className="chat__info">
						<div className="chat__top-info">
							<div className="chat__top-info-wrap">
								<span title={chat.user.name} className="user__name">{chat.user.name}</span>
							</div>
							<div className="chat__time-last-message">21:24</div>
						</div>
						<div className="chat__last-message">
							<span
								className="chat__last-message-text">{chat.messages[chat.messages.length - 1].text}</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Chat;