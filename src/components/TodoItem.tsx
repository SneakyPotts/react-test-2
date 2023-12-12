import React, {ChangeEvent, FC, ReactNode} from "react";
import {ITodo} from "../types/typed";
import {useDeleteTodoMutation, useUpdateTodoMutation} from "../redux/todoApi";
import {useNavigate} from "react-router-dom";
import {MdOutlineDeleteOutline} from "react-icons/md";
import IconBtn from "./buttons/IconBtn";
import styles from './Todo.module.scss'

interface TodoItemProps {
    id?: string;
    to?: string;
    title?: string
    completed?: boolean;
    children: ReactNode;
}

const TodoItem: FC<TodoItemProps> = ({id, title, completed, children}) => {
    const navigate = useNavigate()
    const [deleteTodo] = useDeleteTodoMutation()
    const [toggleChecked] = useUpdateTodoMutation()

    const handleDeleteTodo = async (todoId: string) => {
        await deleteTodo(todoId)
        navigate('/todos')
    }

    const handleChangeCompleted = (e: ChangeEvent<HTMLInputElement>) => {
        if (id && title) {
            const newItem: ITodo = {
                id,
                title,
                completed: e.currentTarget.checked,
            }
            toggleChecked(newItem)
        }

    }

    return (
        <div className={styles.card}>
            <IconBtn
                onClick={() => handleDeleteTodo(id!)}
            >
                <MdOutlineDeleteOutline />
            </IconBtn>
            <input
                name="completed"
                type="checkbox"
                checked={completed}
                onChange={handleChangeCompleted}
            />
            {children}
        </div>
    )
}

export default TodoItem;