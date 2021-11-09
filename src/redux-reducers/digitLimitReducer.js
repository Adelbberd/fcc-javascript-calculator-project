const digitLimitReducer = (state = false, action) => {
	switch (action.type) {
		case 'DIGIT_LIMIT':
			return action.payload;
		default:
			return state;
	}
};

export default digitLimitReducer;
