const expressionAction = (payload) => {
	return {
		type: 'EXPRESSION',
		payload: payload,
	};
};

export default expressionAction;
