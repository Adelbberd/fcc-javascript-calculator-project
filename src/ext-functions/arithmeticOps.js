/*eslint-disable no-eval */
import appendNumAction from '../redux-actions/appendNumAction';
import expressionAction from '../redux-actions/expressionAction';
import hasDecimalAction from '../redux-actions/hasDecimalAction';

export const arithmeticOperators = (
	operator,
	dispatch,
	inputNumbers,
	expression
) => {
	/** Handle arithmetic operators (+,-,*,/). Perform
	 *  arithmetic calculations in any order using formula logic.
	 */
	let newExpression;
	let isEqualOne = expression.length === 1;

	if (
		(operator === '*' || operator === '/') &&
		(expression === '' || (/^[+-]/.test(expression) && isEqualOne))
	) {
		return;
	} else if (/\d[*+\-/]{1}-$/.test(expression) && operator === '-') {
		return;
	} else if (expression.includes('=')) {
		dispatch(expressionAction(inputNumbers + operator));
		dispatch(appendNumAction(''));
		return;
	} else if (/\d[*+\-/]$/.test(expression) && operator !== '-') {
		newExpression = expression.slice(0, -1); // Replace the previous operator.
		dispatch(expressionAction(newExpression + operator));
		return;
	} else if (/\d[*+\-/]{1}-$/.test(expression) && operator !== '-') {
		newExpression = expression.slice(0, -2); // Replace the two previous operators.
		dispatch(expressionAction(newExpression + operator));
		return;
	} else if (
		/^[+-]/.test(expression) &&
		isEqualOne &&
		!(operator === '*' || operator === '/')
	) {
		dispatch(expressionAction(operator));
		return;
	}
	dispatch(expressionAction(expression + operator));
	dispatch(appendNumAction(''));
	dispatch(hasDecimalAction(false));
};
