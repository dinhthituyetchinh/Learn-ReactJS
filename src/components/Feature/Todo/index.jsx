import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Đánh răng',
            status: 'new',
        },
        {
            id: 2,
            title: 'Rửa mặt',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Ăn sáng',
            status: 'new',
        },
    ];
// Hiện tại các biến trên là props thì chungd ta không thể hay đổi,
// nếu chúng ta muốn thay đổi phải chuyển nó sang state
    const [todoList, setTodoList] = useState(initTodoList);
    const handleTodoClick = (todo, idx) => {
        // Khi làm việc với obj hoặc array trước khi muốn thay đổi phải copy nó qua một cái mới
        // clone current array to the new one
        const newTodoList = [...todoList];
        console.log(todo, idx);
        // toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed': 'new',
        };
        newTodoList[idx] = newTodo;
        // update todo list
        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList 
                todoList={todoList} 
                onTodoClick={handleTodoClick}></TodoList>
        </div>
    );
}

export default TodoFeature;