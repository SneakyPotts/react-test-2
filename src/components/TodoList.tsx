import {useGetAllTodoQuery} from "../redux/todoApi";
import TodoItem from "./TodoItem";
import Spinner from "./Spinner";
import CustomLink from "./CustomLink";

import styles from './Todo.module.scss'

const TodoList = () => {
    const {data: todos, isLoading} = useGetAllTodoQuery(undefined)

    return (
        <>
            {isLoading ? <Spinner /> :
                (<div className={styles.cardList}>
                    {todos?.map(({id, title, completed}) => (
                        <TodoItem
                            key={id}
                            to={id}
                            id={id}
                            title={title}
                            completed={completed}
                        >
                            <CustomLink to={id}>{title}</CustomLink>
                        </TodoItem>
                    ))}
                </div>)
            }
        </>
    )
}

export default TodoList;