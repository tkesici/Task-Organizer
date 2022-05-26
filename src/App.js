import React, {useState} from "react";
import './App.css';
import Form from './components/Form';
import List from './components/List';
function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
  return (
    <div className="App">
        <header>
            <h1>Task Organizer</h1>
        </header>
        <Form
            todos={todos}
            setTodos={setTodos}
            inputText = {inputText}
            setInputText={setInputText} />
        <List />
    </div>
  );
}

export default App;
