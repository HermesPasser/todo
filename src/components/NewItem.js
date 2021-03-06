import { useState } from 'react';

export default function NewItem({state, setState}) {
	let [text, setText] = useState('')
	let [done, setCompletion] = useState(false)

	const handleChecked = (event) => setCompletion(event.target.checked)
	const handleText = (event) => setText(event.target.value)

	const addItem = (key) => {
		const enterKeyCodes = 13
		const newId = state.listLastIdUsed +1

		if (key.keyCode !== enterKeyCodes)
			return
		
		if (text.trim() === '')
			return

		const newItem = { 'text': text, 'done': done, id: newId }
		setState({...state,  listLastIdUsed: newId,listItems: [...state.listItems, newItem]})
		setCompletion(false)
		setText('')
	}

	return (
		<div className="new-todo-wrapper">
			<input type="checkbox" className="checkbox-round" checked={done} onChange={handleChecked} />

			<input type="text" placeholder="Create a new todo..." 
				value={text}
				onKeyDown={addItem} 
				onChange={handleText} />
		</div>
	)
}
