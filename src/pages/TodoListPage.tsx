import {useCreateTodoMutation} from "../redux/todoApi";
import TodoList from "../components/TodoList";
import Form from "../components/Form";
import Button from "../components/buttons/Button";

const TodoListPage = () => {
    const [addTodo] = useCreateTodoMutation()

    const handlerAddTodo = (newTitle: string) => {

        const newTodo = {
            id: String(new Date()),
            title: newTitle,
            completed: false,
        }
        addTodo(newTodo)
    }

    return (
        <>
            <h1>ToDo List</h1>
            <Form
                placeholder="New Todo"
                handlerSubmit={handlerAddTodo}
            >
                <Button>Add</Button>
            </Form>
            <TodoList />
        </>
    )
}

export default TodoListPage;