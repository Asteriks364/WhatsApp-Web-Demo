const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim nec dui nunc mattis. Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut aliquam purus sit amet. Nullam non nisi est sit amet facilisis. Massa tincidunt dui ut ornare lectus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non.'

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function randomText() {
	return lorem.substr(0, randomInteger(5, 100));
}

export {randomInteger, randomText}