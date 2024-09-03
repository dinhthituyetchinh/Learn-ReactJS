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

    const[filteredStatus, setFilterStatus] = useState('all');

    const handleShowAllClick = () =>{
        setFilterStatus('all');
    }

    const handleShowCompletedClick = () =>{
        setFilterStatus('completed');
    }

    const handleShowNewClick = () =>{
        setFilterStatus('new');
    }

    const renderedTodoList = todoList.filter(todo =>filteredStatus === 'all' || filteredStatus === todo.status)
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList 
                // todoList={todoList}
                // Thay vì render dữ liệu như thường thì bây giờ sẽ có render theo filter
                todoList={renderedTodoList} 
                onTodoClick={handleTodoClick}></TodoList>

                <div>
                    <button onClick={handleShowAllClick}>Show All</button>
                    <button onClick={handleShowCompletedClick}>Show Completed</button>
                    <button onClick={handleShowNewClick}>Show New</button>

                </div>
        </div>
    );
}

export default TodoFeature;