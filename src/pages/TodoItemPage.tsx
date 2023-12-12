import React, {useState} from "react";
import {useGetOneTodoQuery, useUpdateTodoMutation} from "../redux/todoApi";
import {useParams, useNavigate} from "react-router-dom";
import {MdOutlineEdit} from "react-icons/md";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import IconBtn from "../components/buttons/IconBtn";
import Button from "../components/buttons/Button";
import Form from "../components/Form";

const TodoItemPage = () => {
    const [isEdit, setIsEdit] = useState(false)
    const {id: paramId} = useParams()
    const navigate = useNavigate()
    const goHomePage = () => navigate(-1)
    const {data, isLoading} = useGetOneTodoQuery(paramId)
    const [changeTodo] = useUpdateTodoMutation()

    const handlerUpdateTodo = (updateTitle: string) => {
        if (data) {
            const updatedTodo = {
                id: data?.id,
                completed: data?.completed,
                title: updateTitle
            }
            changeTodo(updatedTodo).then(() => setIsEdit(false)).catch((error) => console.log(error))
        }
    }

    return (
        <>
            <h1>ToDo page</h1>
            {isEdit && (
                <Form
                    placeholder="Update Todo"
                    handlerSubmit={handlerUpdateTodo}
                    initialValue={data?.title}
                >
                    <Button>Update</Button>
                </Form>)}
            {isLoading ? <Spinner /> :
                <>
                    <TodoItem
                        id={data?.id}
                        title={data?.title}
                        completed={data?.completed}
                    >
                        <Title>{data?.title}</Title>
                        <IconBtn onClick={() => setIsEdit(!isEdit)}>
                            <MdOutlineEdit />
                        </IconBtn>
                    </TodoItem>
                    <Button onClick={goHomePage}>go Back</Button>
                </>
            }
        </>
    )
}

export default TodoItemPage;