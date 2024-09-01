import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Đánh răng'
        },
        {
            id: 2,
            title: 'Rửa mặt'
        },
        {
            id: 3,
            title: 'Ăn sáng'
        },
    ]


    
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList}></TodoList>
        </div>
    );
}

export default TodoFeature;