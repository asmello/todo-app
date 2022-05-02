import React, { KeyboardEvent, useState } from "react";
import { FaTrash } from "react-icons/fa";

import styles from "./TodoItem.module.css";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onUpdate: (id: string, newTitle: string) => void
}

const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
};

export default function TodoItem(props: TodoItemProps) {
    const { id, title, completed } = props.todo;
    const [editing, setEditing] = useState(false);
    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setEditing(false);
        }
    }
    return (
        <li className={styles.item}>
            <div onDoubleClick={() => setEditing(true)} style={{ display: editing ? "none" : "initial" }}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.onToggle(id)}
                />
                <button onClick={() => props.onDelete(id)}>
                    <FaTrash color="orangered" size="16px" />
                </button>
                <span style={completed ? completedStyle : undefined}>
                    {title}
                </span>
            </div>
            <input
                type="text"
                style={{ display: editing ? "initial" : "none" }}
                className={styles.textInput}
                value={title}
                onChange={event => {
                    props.onUpdate(id, event.target.value);
                }}
                onKeyDown={onKeyDown}
                onBlur={() => setEditing(false)}
            />
        </li>
    );
}