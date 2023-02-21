import { useState } from 'react';
import TodosList from '../components/TodosList';
import InputTodo from '../components/InputTodo';
// other imported components here
const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 2,
            title: 'Develop website and add content',
            completed: true,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
        },
    ]);

    const handleChange = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                console.log(todo);
                return todo;
            })
        );
    };

    return (
        <div>
            <InputTodo /> 
            <div>Hello</div>
            <TodosList todosProps={todos} handleChange={handleChange} />
        </div>
    );
};
export default TodosLogic;