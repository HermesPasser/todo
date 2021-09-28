import initialState from './state';
import List from './components/List';
import NewItem from './components/NewItem';
import SunIcon from './assets/icon-sun.svg'
import MoonIcon from './assets/icon-moon.svg'
import { useState } from 'react';
import './index.css';

function App() {
	const [state, setState] = useState(initialState)
	const icon = state.darkMode ? SunIcon : MoonIcon
	
	const modeToggleClicked = () => {	
		setState({...state, darkMode: state.darkMode})
		document.body.classList.toggle("dark");
	}

	return (
		<main className="App">
			<header>
				<h1>TODO</h1>
				<button id="dark-mode-btn">
					<img src={icon} 
						alt="Icon representing the sun on the dark mode and the moon on the light mode" 
						onClick={modeToggleClicked}
					/>
				</button>
			</header>
			<NewItem state={state} setState={setState} />
			<List state={state} setState={setState} />
			<p className="drag-text">Drag and drop to reorder list</p>
		</main>
	)
}

export default App;
