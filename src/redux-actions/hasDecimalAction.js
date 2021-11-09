const hasDecimalAction = (payload) => {
	return {
		type: 'DECIMAL',
		payload: payload,
	};
};

export default hasDecimalAction;
