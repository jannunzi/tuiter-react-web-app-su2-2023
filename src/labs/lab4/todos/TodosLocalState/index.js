import React, { useState } from "react";
import TodoList from "./TodoList";
import TodosTitleComponent from "./TodosTitleComponent";

function TodosLocalState() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", completed: true },
    { id: 2, title: "Todo 2", completed: false, editing: true },
    { id: 3, title: "Todo 3", completed: false },
    { id: 4, title: "Todo 4", completed: true, editing: true },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState("New Todo");

  const handleDeleteClick = (todo) => {
    // alert("Delete clicked " + todo.id);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  const handleCompletedClick = (todo) => {
    // alert("Completed clicked " + todo.id);
    const newTodo = { ...todo, completed: !todo.completed };
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return newTodo;
      }
      return t;
    });
    setTodos(newTodos);
  };

  const handleEditClick = (todo, editing) => {
    // alert("Edit clicked " + todo.id);
    const newTodo = { ...todo, editing: editing };
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return newTodo;
      }
      return t;
    });
    setTodos(newTodos);
  };

  const handleAddClick = () => {
    // todos.push({
    //   id: todos.length + 1,
    //   title: "Todo " + (todos.length + 1),
    //   completed: false,
    // });
    // console.log(todos);
    // alert("Add clicked");
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleTitleChange = (e, todo) => {
    const newTodo = { ...todo, title: e.target.value };
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return newTodo;
      }
      return t;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <TodosTitleComponent newTodoTitle={newTodoTitle} />
      <TodoList
        handleAddClick={handleAddClick}
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        todos={todos}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handleCompletedClick={handleCompletedClick}
        handleTitleChange={handleTitleChange}
      />
    </div>
  );
}

export default TodosLocalState;
