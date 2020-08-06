import React, {useState} from 'react';

function Link({title, icon}) {
	const [isOpen, setOpen] = useState(false);

	const clickLink = () => {
		setOpen(!isOpen);
		alert(!isOpen ? 'открыть ' + title : 'закрыть ' + title);
	};

	return (
		<div className={`link ${isOpen ? 'link_active' : ''}`}>
			<div role="button"
			     title={title}
			     onClick={clickLink}>
				<span>{icon}</span>
			</div>
		</div>
	);
}

export default Link;