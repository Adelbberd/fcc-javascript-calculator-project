/*eslint-disable no-eval */
import appendNumAction from '../redux-actions/appendNumAction';
import expressionAction from '../redux-actions/expressionAction';
import hasDecimalAction from '../redux-actions/hasDecimalAction';

export const equalTo = (dispatch, expression) => {
	/** Evaluate the expression after entering the equal sign */
	let newExpression;

	if (expression.includes('=')) {
		return;
	} else {
		if (/\d[*+\-/]$/.test(expression)) {
			newExpression = expression.slice(0, -1);
			let result = Math.round(100000 * eval(newExpression)) / 100000;
			dispatch(expressionAction(`${newExpression} = ${result}`));
			dispatch(appendNumAction(result));
			dispatch(hasDecimalAction(false));
			return;
		} else if (/\d[*+\-/]{2}$/.test(expression)) {
			newExpression = expression.slice(0, -2);
			let result = Math.round(100000 * eval(newExpression)) / 100000;
			dispatch(expressionAction(`${newExpression} = ${result}`));
			dispatch(appendNumAction(result));
			dispatch(hasDecimalAction(false));
			return;
		}
	}
	let result = Math.round(100000 * eval(expression)) / 100000;
	dispatch(expressionAction(`${expression} = ${result}`));
	dispatch(appendNumAction(result));
	dispatch(hasDecimalAction(false));
};
