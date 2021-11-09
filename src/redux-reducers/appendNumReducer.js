const appendNumReducer = (state = '', action) => {
	switch (action.type) {
		case 'NUMBERS':
			return action.payload;
		default:
			return state;
	}
};

export default appendNumReducer;
