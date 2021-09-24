import List from './components/List';
import SunIcon from './assets/icon-sun.svg'
import MoonIcon from './assets/icon-moon.svg'
import './index.css';

function App() {
	return (
		<main className="App">
			<header>
				<h1>TODO</h1>
				<button id="dark-mode-btn">
					<img src={MoonIcon} alt="Icon representing the sun on the dark mode and the moon on the light mode" />
				</button>
			</header>
			<div className="new-todo-wrapper">
				<input type="checkbox" />
				<input type="text"  placeholder="Create a new todo..." />
			</div>
			<List />
			<p>Drag and drop to reorder list</p>
		</main>
	)
}

export default App;
