const hasDecimalReducer = (state = false, action) => {
	switch (action.type) {
		case 'DECIMAL':
			return action.payload;
		default:
			return state;
	}
};

export default hasDecimalReducer;
