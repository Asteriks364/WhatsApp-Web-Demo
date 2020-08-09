import React, {useEffect, useRef} from 'react'
import Message from './components/Message'

export default function ChatWindow({messages}) {
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current.scrollIntoView({block: "end"})
	}, [messages]);

	return (
		<div className="chat-window">
			<div className="chat-window__wrap" id="block">
				<div className="chat-window__indent"></div>
				<div className="chat-window__list">
					{messages.map((message, index) => (
							(message.length - 1 === index) ? (
								<Message key={index} ref={messagesEndRef} message={message}/>
							) : (<Message key={index} message={message}/>)
						)
					)}
				</div>
				<div ref={messagesEndRef}/>
			</div>
		</div>
	);
}
