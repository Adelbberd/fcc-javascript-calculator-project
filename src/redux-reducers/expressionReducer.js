const expressionReducer = (state = '', action) => {
	switch (action.type) {
		case 'EXPRESSION':
			return action.payload;
		default:
			return state;
	}
};

export default expressionReducer;
