const [inputNumbers, setInputNumbers] = useState('');
const [expression, setExpression] = useState('');
const [hasDecimal, setHasDecimal] = useState(false);
const [digitLimit, setDigitLimit] = useState(false);

function clearDisplay() {
	setInputNumbers('');
	setExpression('');
	setHasDecimal(false);
}

// Deal with numbers
function appendNumber(e) {
	let num = e.target.value.toString();
	if (inputNumbers.length >= 22) {
		setDigitLimit(true); // Display the DIGIT LIMIT warning momentarily.
		setTimeout(() => {
			setDigitLimit(false);
		}, 1000);
		return;
	} else {
		if (num === '0') {
			beginMultZeros(e);
		} else if (expression.includes('=')) {
			setInputNumbers(num);
			setExpression(num);
		} else {
			setInputNumbers(inputNumbers + num);
			setExpression(expression + num);
		}
	}
}

// Check current number for decimal
function checkDecimal(e) {
	let notStartWithDecimal = '';
	let decimalOp = e.target.value.toString();
	if (hasDecimal) return;
	else if (inputNumbers === '') {
		notStartWithDecimal = '0';
	} else if (expression.includes('=')) {
		setExpression('0' + decimalOp); // 0.
		setInputNumbers('0' + decimalOp);
		setHasDecimal(true);
		return;
	}
	setInputNumbers(notStartWithDecimal + inputNumbers + decimalOp);
	setExpression(expression + notStartWithDecimal + decimalOp);
	setHasDecimal(true);
}

function beginMultZeros(zero) {
	let num = zero.target.value.toString();
	if (expression.includes('=')) {
		setInputNumbers(num);
		setExpression(num);
		setHasDecimal(false);
		return;
	} else if (inputNumbers.startsWith('0') && inputNumbers.length === 1) return;
	setInputNumbers(inputNumbers + num);
	setExpression(expression + num);
}

// Deal with math operators.
function handleOperators(e) {
	let operator = e.target.value;
	let newExpression;
	if (expression.includes('=')) {
		setExpression(inputNumbers + operator);
		setInputNumbers('');
		return;
	} else if ((operator === '*' || operator === '/') && expression === '') {
		return;
	} else if (/\d[*+\-/]$/.test(expression) && operator !== '-') {
		// Replace the previous operator
		newExpression = expression.slice(0, -1);
		setExpression(newExpression + operator);
		return;
	} else if (/\d[*+\-/]{1}-$/.test(expression) && operator !== '-') {
		// Replace the two previous operators.
		newExpression = expression.slice(0, -2);
		setExpression(newExpression + operator);
		return;
	} else if (/\d[*+\-/]{1}-$/.test(expression) && operator === '-') {
		return;
	}
	setExpression(expression + operator);
	setInputNumbers('');
	setHasDecimal(false);
}

// Evaluate the expression.
function handleEqualTo() {
	let newExpression;
	if (expression.includes('=')) {
		return;
	} else {
		if (/\d[*+\-/]$/.test(expression)) {
			newExpression = expression.slice(0, -1);
			let result = Math.round(100000 * eval(newExpression)) / 100000;
			setExpression(`${newExpression} = ${result}`);
			setInputNumbers(result);
			setHasDecimal(false);
			return;
		} else if (/\d[*+\-/]{2}$/.test(expression)) {
			newExpression = expression.slice(0, -2);
			let result = Math.round(100000 * eval(newExpression)) / 100000;
			setExpression(`${newExpression} = ${result}`);
			setInputNumbers(result);
			setHasDecimal(false);
			return;
		}
	}
	let result = Math.round(100000 * eval(expression)) / 100000;
	setExpression(`${expression} = ${result}`);
	setInputNumbers(result);
	setHasDecimal(false);
}
