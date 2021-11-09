import { useSelector } from 'react-redux';

const Display = () => {
	const digitLimit = useSelector((state) => state.digitLimit);
	const inputNumbers = useSelector((state) => state.inputNumbers);
	const expression = useSelector((state) => state.expression);
	return (
		<div id="main-display">
			<div className="expression">
				<p>{expression || 0}</p>
			</div>
			<div className="results">
				{digitLimit ? (
					<p
						className="digitLimit"
						id="display"
						style={{ color: 'rgba(255, 0, 0, 0.65)' }}
					>
						DIGIT LIMIT
					</p>
				) : (
					<p id="display">{inputNumbers || 0}</p>
				)}
			</div>
		</div>
	);
};

export default Display;
