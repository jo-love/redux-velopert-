import React from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}

function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  const onChanage = (e) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChanage} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;
