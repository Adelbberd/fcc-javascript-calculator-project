import digitLimitAction from '../redux-actions/digitLimitAction';
import appendNumAction from '../redux-actions/appendNumAction';
import expressionAction from '../redux-actions/expressionAction';
import hasDecimalAction from '../redux-actions/hasDecimalAction';

export const appendNumbers = (
	num,
	dispatch,
	lengthLimit,
	inputNumbers,
	expression
) => {
	/** Add or append numbers to expression formula for calculation.
	 *  example expression, 2+4-1*5
	 */

	if (lengthLimit >= 22) {
		dispatch(digitLimitAction(true)); // Display the DIGIT LIMIT warning momentarily.
		setTimeout(() => {
			dispatch(digitLimitAction(false));
		}, 1000);
		return;
	} else {
		if (num === '0') {
			beginMultZeros(num, dispatch, inputNumbers, expression);
		} else if (expression.includes('=')) {
			dispatch(appendNumAction(num));
			dispatch(expressionAction(num));
		} else {
			dispatch(appendNumAction(inputNumbers + num));
			dispatch(expressionAction(expression + num));
		}
	}
};

export const beginMultZeros = (num, dispatch, inputNumbers, expression) => {
	/** The input number should not begin with multiple zeros. */

	if (expression.includes('=')) {
		dispatch(appendNumAction(num));
		dispatch(expressionAction(num));
		dispatch(hasDecimalAction(false));
		return;
	} else if (inputNumbers.startsWith('0') && inputNumbers.length === 1) return;
	dispatch(appendNumAction(inputNumbers + num));
	dispatch(expressionAction(expression + num));
};

export const checkDecimal = (
	decimal,
	dispatch,
	hasDecimal,
	inputNumbers,
	expression
) => {
	/** An input number should have one decimal character in it. */
	let notStartWithDecimal = '';

	if (hasDecimal) return;
	else if (inputNumbers === '') {
		notStartWithDecimal = '0';
	} else if (expression.includes('=')) {
		dispatch(expressionAction('0' + decimal)); // 0.
		dispatch(appendNumAction('0' + decimal));
		dispatch(hasDecimalAction(true));
		return;
	}
	dispatch(appendNumAction(notStartWithDecimal + inputNumbers + decimal));
	dispatch(expressionAction(expression + notStartWithDecimal + decimal));
	dispatch(hasDecimalAction(true));
};
