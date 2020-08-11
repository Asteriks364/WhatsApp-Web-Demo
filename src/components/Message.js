import React from 'react';
import icons from "../icons";

export default function Message({message}) {
	return (
		<div className={`message message_${message.type}`}>
			<div className="message__wrap">
				<span className="message__wrap-triangle">
					{message.type === 'out' ? icons.tailOut() : icons.tailIn()}
				</span>
				<div className="message__text selectable-text">
					<span>{message.text}</span>
					<span className="message__text-indent"></span>
				</div>
				<div className="message__data">
					<span className="message__time">{message.time}</span>
					{message.type === 'out' &&
					<div className={`message__status ${message.isRead ? 'message__status_read' : ''}`}>
						{icons.statusMessage()}
					</div>
					}
				</div>
			</div>
		</div>
	)
}
