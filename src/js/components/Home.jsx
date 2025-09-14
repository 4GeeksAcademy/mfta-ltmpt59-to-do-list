import { useState } from "react";

//create your first component
const Home = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = (e) => {
    if (e.code === "Enter" && e.target.value.trim() !== "") {
      setTodoList([...todoList, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
	  setTodoList(todoList.filter((todo, i) => i !== index))
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h1>todos</h1>
      <div
        className="d-flex flex-column align-items-start w-100"
        style={{ maxWidth: "550px" }}
      >
        <form onSubmit={handleSubmit} className="w-100">
          <input
            type="text"
            name="newTodo"
            id="newTodo"
            placeholder="What needs to be done?"
            className="w-100"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            onKeyDown={addTodo}
          />
        </form>
        <ul className="list-group list-group-flush w-100 border">
          {todoList.map((todo, index) => {
            return (
              <li className="list-group-item d-flex" key={index}>
                {todo} <button className="text-danger ms-auto btn hidden-button" onClick={() => deleteTodo(index)}>X</button>
              </li>
            );
          })}
        </ul>
        {
          todoList.length > 0 &&
          <p className="form-text">{`${todoList.length} ${todoList.length === 1 ? "item" : "items"} left`}</p>
        }
      </div>
    </div>
  );
};

export default Home;
