import TodoItem, { Todo } from "./TodoItem";

interface TodosListProps {
    todos: Todo[];
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onUpdate: (id: string, newTitle: string) => void
}

function TodosList(props: TodosListProps) {
    return (
        <ul>
            {props.todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={props.onToggle}
                    onDelete={props.onDelete}
                    onUpdate={props.onUpdate}
                />)}
        </ul>
    );
}

export default TodosList;