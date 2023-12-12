import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import styles from './Todo.module.scss'
import {ITodo} from "../types/typed";

interface IProps {
    children: React.ReactNode;
    placeholder: string;
    handlerSubmit: (value: string) => void;
    initialValue?: string;

}

const Form: FC<IProps> = ({
    children,
    placeholder,
    handlerSubmit,
    initialValue = ''
}) => {
    const [newTitle, setNewTitle] = useState(initialValue)

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value)
    }

    const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newTitle.trim() === '') {
            alert("Field is empty")
            return
        }
        handlerSubmit(newTitle)
        setNewTitle("")
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleAddTodo}
        >
            <input
                className={styles.input}
                name="todo"
                value={newTitle}
                type="text"
                placeholder={placeholder}
                onChange={handleChangeInput}
            />
            {children}
        </form>
    )
}

export default Form;