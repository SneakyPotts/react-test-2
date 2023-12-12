import {
    createApi,
    FetchArgs,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {ITodo} from "../types/typed";

type TodoResponse = ITodo[]

export const todoApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getAllTodo: builder.query<TodoResponse, undefined>({
            query: () => ({
                url: `todos`,
            }),
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: 'Todos' as const, id})),
                    {type: 'Todos', id: 'LIST'},
                ]
                : [{type: 'Todos', id: 'LIST'}],
        }),

        getOneTodo: builder.query<ITodo, string | undefined>({
            query: (id) => ({
                url: `todos/${id}`,
            }),
            providesTags: (result, error, id) => [{type: "Todos", id}],
        }),

        createTodo: builder.mutation<ITodo, ITodo>({
            query: (body) => ({
                url: `todos`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Todos"],
        }),

        updateTodo: builder.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `todos/${todo.id}`,
                method: "PATCH",
                body: todo
            }),
            invalidatesTags: (result, error, todo) => [{
                type: "Todos",
                id: todo.id
            }],
        }),

        deleteTodo: builder.mutation<Request, string>({
            query: (id) => ({
                url: `todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"],
        }),
    }),
});

export const {
    useGetAllTodoQuery,
    useGetOneTodoQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;



