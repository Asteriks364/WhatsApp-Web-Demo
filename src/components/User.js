import React from 'react';
import AvatarImg from '../components/AvatarImg'

export default function User({user, size}) {
	const openUserCard = () => {
		alert("Открыть профиль пользователя")
	};

	return (
		<div className="user">
			<div className="user__avatar"
			     onClick={openUserCard}>
				<AvatarImg avatar={user.avatar} size={size}/>
			</div>
		</div>
	);
}