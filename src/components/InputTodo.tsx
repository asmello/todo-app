import { ChangeEvent, FormEvent, useState } from "react";

import { FaPlusCircle } from "react-icons/fa";

import styles from "./InputTodo.module.css";


function InputTodo(props: { onSubmit: (title: string) => void }) {
    const [title, setTitle] = useState("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (title.trim()) {
            props.onSubmit(title);
            setTitle("");
        }
    }

    return (
        <form onSubmit={onSubmit} className={styles.formContainer}>
            <input
                type="text"
                className={styles.inputText}
                placeholder="Add Todo..."
                value={title}
                onChange={onChange}
            />
            <button className={styles.inputSubmit}>
                <FaPlusCircle color="darkcyan" size="20px" style={{ marginTop: "2px" }} />
            </button>
        </form>
    );
}

export default InputTodo;