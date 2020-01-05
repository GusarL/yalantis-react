export const chooseColor = usersNumber => {
	let color = {};
	switch (true) {
		case (usersNumber <= 2):
			color.color = 'grey';
			break;
		case (usersNumber <= 6):
			color.color = 'blue';
			break;
		case (usersNumber <= 10):
			color.color = 'green';
			break;
		case (usersNumber >= 11):
			color.color = 'red';
			break;
	}
	return color.color;
};
