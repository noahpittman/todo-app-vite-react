import "./App.css";

// components
import Header from "./Components/Header.jsx";
import { useState, useEffect } from "react";

function App() {
	const localList = JSON.parse(localStorage.getItem("list"));

	// state with list of todos
	const [list, setList] = useState(localList);

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);

	// state with input value
	const [input, setInput] = useState("");

	// function to add todos
	const addTodo = (todo) => {
		const newTodo = {
			id: Math.random(),
			todo: todo,
		};

		// add the todo to the list
		if (input !== "" && input !== " ") {
			setList([...list, newTodo]);
		}

		// clear input box
		setInput("");
	};

	const submitOnEnter = (e) => {
		e.preventDefault();
		if (e.key === "Enter") {
			if (input === "" || input === " ") {
				return;
			}
			document.getElementById("addTask").click();
		}
	};

	const deleteTodo = (id) => {
		// filter out todo with id
		const newList = list.filter((todo) => todo.id !== id);

		// set list state to be the filtered list
		setList(newList);
	};

	return (
		<>
			<div className="container">
				<Header />
				<div className="inputContainer">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						id="inputField"
						onKeyUp={submitOnEnter}
					/>
					<button id="addTask" onClick={() => addTodo(input)}>
						Add
					</button>
				</div>

				<ul>
					{list.map((todo) => (
						<div className="todoItemContainer">
							<li className="todoItem" key={todo.id}>
								{todo.todo}
							</li>
							<button
								className="deleteTodo"
								onClick={() => deleteTodo(todo.id)}
							>
								&times;
							</button>
						</div>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
