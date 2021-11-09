import { useDispatch, useSelector } from 'react-redux';
import { equalTo } from '../ext-functions/equalityOp.js';

const Equals = () => {
	const dispatch = useDispatch();
	const expression = useSelector((state) => state.expression);

	const handleEqualityOp = () => {
		equalTo(dispatch, expression);
	};

	return (
		<button id="equals" value="=" onClick={handleEqualityOp}>
			<p>=</p>
		</button>
	);
};

export default Equals;
