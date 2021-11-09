import { useSelector, useDispatch } from 'react-redux';
import { clearDisplay } from '../ext-functions/allClear.js';
import { arithmeticOperators } from '../ext-functions/arithmeticOps.js';
import {
	appendNumbers,
	checkDecimal,
} from '../ext-functions/appendNumAndDecimal.js';

const DigitsAndOperators = () => {
	const dispatch = useDispatch();
	const lengthLimit = useSelector((state) => state.inputNumbers).length;
	const inputNumbers = useSelector((state) => state.inputNumbers);
	const expression = useSelector((state) => state.expression);
	const hasDecimal = useSelector((state) => state.hasDecimal);

	const handleNumbers = (e) => {
		let num = e.target.value.toString();
		appendNumbers(num, dispatch, lengthLimit, inputNumbers, expression);
	};

	const handleDecimal = (e) => {
		let decimal = e.target.value.toString();
		checkDecimal(decimal, dispatch, hasDecimal, inputNumbers, expression);
	};

	const handleAllClear = () => {
		clearDisplay(dispatch);
	};

	const handleArithmeticOps = (e) => {
		let operator = e.target.value.toString();
		arithmeticOperators(operator, dispatch, inputNumbers, expression);
	};

	return (
		<div className="grid-container">
			<button
				id="one"
				className="digits numDecimal"
				value={1}
				onClick={handleNumbers}
			>
				1
			</button>
			<button
				id="two"
				className="digits numDecimal"
				value={2}
				onClick={handleNumbers}
			>
				2
			</button>
			<button
				id="three"
				className="digits numDecimal"
				value={3}
				onClick={handleNumbers}
			>
				3
			</button>
			<button
				id="add"
				className="math-operators"
				value="+"
				onClick={handleArithmeticOps}
			>
				+
			</button>
			<button
				id="four"
				className="digits numDecimal"
				value={4}
				onClick={handleNumbers}
			>
				4
			</button>
			<button
				id="five"
				className="digits numDecimal"
				value={5}
				onClick={handleNumbers}
			>
				5
			</button>
			<button
				id="six"
				className="digits numDecimal"
				value={6}
				onClick={handleNumbers}
			>
				6
			</button>
			<button
				id="subtract"
				className="math-operators"
				value="-"
				onClick={handleArithmeticOps}
			>
				-
			</button>
			<button
				id="seven"
				className="digits numDecimal"
				value={7}
				onClick={handleNumbers}
			>
				7
			</button>
			<button
				id="eight"
				className="digits numDecimal"
				value={8}
				onClick={handleNumbers}
			>
				8
			</button>
			<button
				id="nine"
				className="digits numDecimal"
				value={9}
				onClick={handleNumbers}
			>
				9
			</button>
			<button
				id="multiply"
				className="math-operators"
				value="*"
				onClick={handleArithmeticOps}
			>
				X
			</button>
			<button id="clear" onClick={handleAllClear}>
				AC
			</button>
			<button
				id="zero"
				className="digits numDecimal"
				value={0}
				onClick={handleNumbers}
			>
				0
			</button>
			<button
				id="decimal"
				className="math-operators numDecimal"
				value="."
				onClick={handleDecimal}
			>
				.
			</button>
			<button
				id="divide"
				className="math-operators"
				value="/"
				onClick={handleArithmeticOps}
			>
				/
			</button>
		</div>
	);
};

export default DigitsAndOperators;
