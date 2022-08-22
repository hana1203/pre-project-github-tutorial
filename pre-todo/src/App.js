import { useState } from 'react';
// import './App.css';
// import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';

//styled components
// const GlobalStyle = createGlobalStyle`
//   * {
//     display: flex;
//     justify-content: center;
//     padding: 1rem;
//   }
// `;

// const StyledButton = styled.button`
//   background-color: cornflowerblue;
//   color: white;
// `;

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setTodo('');
    setTodos((current) => [todo, ...current]);
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  // console.log(todos.map((el, idx) => <li key={idx}>{el}</li>));

  return (
    <div className="App">
      <h1>🍒 TODO APP 🍒</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="write your todo"
        ></input>
        <button>ADD</button>
      </form>
      <article>
        {todos.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </article>
    </div>
  );
}

export default App;
