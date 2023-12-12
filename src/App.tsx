import React from 'react';
import {Route, Routes} from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import TodoItemPage from "./pages/TodoItemPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        path="todos"
                        element={<TodoListPage />}
                    />
                    <Route
                        path="todos/:id"
                        element={<TodoItemPage />}
                    />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Route>

            </Routes>
        </div>
    );
}

export default App;
