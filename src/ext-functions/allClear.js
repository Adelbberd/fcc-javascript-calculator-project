import appendNumAction from '../redux-actions/appendNumAction';
import expressionAction from '../redux-actions/expressionAction';
import hasDecimalAction from '../redux-actions/hasDecimalAction';

export const clearDisplay = (dispatch) => {
	dispatch(appendNumAction(''));
	dispatch(expressionAction(''));
	dispatch(hasDecimalAction(false));
};
