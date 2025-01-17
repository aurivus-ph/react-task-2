import './App.css';

/**
 * @callback addCallback
 * @param {Object} data
 * @param {string} data.name
 * @param {number} data.value
 */

/**
 * Input component for adding new items.
 *
 * Calls `onAdd` when Go is clicked.
 *
 * @param {Object} props
 * @param {addCallback} props.onAdd - Callback, when "Go" is clicked.
 * @returns
 */
function Input({ onAdd }) {
	function submit(formData) {
		onAdd({
			name: formData.get('name'),
			value: Number(formData.get('value')),
		});
	}

	return (
		<form className='input' action={submit}>
			<input type='text' name='name' defaultValue='name' />
			<input type='number' name='value' defaultValue={15} />
			<input type='submit' value='Go' />
		</form>
	);
}

function Item({ name }) {
	return (
		<div className='item'>
			<span className='name'>{name}</span>
			<span className='value-initial'>100</span>
			<span className='value-remaining'>50</span>
		</div>
	);
}

function App() {
	/** @type {addCallback} */
	function add(newItem) {
		console.log(newItem);
	}

	return (
		<div className='content'>
			<h1>Template</h1>
			<Input onAdd={add} />
			<hr />
			<div>
				<Item name='name' />
			</div>
		</div>
	);
}

export default App;
