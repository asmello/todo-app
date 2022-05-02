import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import Header from "./Header";
import InputTodo from "./InputTodo";
import { Todo } from "./TodoItem";
import TodosList from "./TodosList";

import styles from "./TodoContainer.module.css";

function loadTodos(): Todo[] {
    const maybeTodos = localStorage.getItem("todos");
    return maybeTodos ? JSON.parse(maybeTodos) : [];
}

export default function TodoContainer() {

    const [todos, setTodos] = useState<Todo[]>(loadTodos);

    const toggleItem = (id: string) =>
        setTodos(prevState =>
            prevState.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed, } : todo
            )
        );

    const deleteItem = (id: string) => setTodos(todos.filter(todo => todo.id !== id));

    const addItem = (title: string) =>
        setTodos([...todos, { id: uuid(), title: title, completed: false }]);

    const updateTitle = (id: string, newTitle: string) =>
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.title = newTitle;
            }
            return todo;
        }));

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <Header />
                <InputTodo onSubmit={addItem} />
                <TodosList
                    todos={todos}
                    onToggle={toggleItem}
                    onDelete={deleteItem}
                    onUpdate={updateTitle}
                />
            </div>
        </div>
    );
}