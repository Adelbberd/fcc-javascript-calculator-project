import Display from './components/Display';
import Equals from './components/Equals';
import DigitsAndOperators from './components/DigitsAndOperators';

function App() {
	return (
		<>
			<div id="header">
				<h1>
					Java<span id="javascript">Script</span> Calculator
				</h1>
			</div>
			<div className="calculator">
				<Display />
				<Equals />
				<DigitsAndOperators />
			</div>
			<footer>
				<p>&copy; 2021 - Designed and coded by Adelberd Mothusi</p>
			</footer>
		</>
	);
}

export default App;
