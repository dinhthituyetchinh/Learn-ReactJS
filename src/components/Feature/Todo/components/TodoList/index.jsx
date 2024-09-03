import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList({todoList, onTodoClick}) {

    const handleTodoClick = (todo, idx) =>{
        //Kiếm tra xem cha có truyền xuống không, nếu không 
        if(!onTodoClick) return;
        // Nếu có
        onTodoClick(todo, idx);
    };


    return (
        <div>
            <ul className='todo-list'>
                {todoList.map((todo, idx) => (
                    <li 
                        key={todo.id}
                        className={classNames({
                            'todo-item': true,
                            completed: todo.status === 'completed'})}
                            // Mỗi lần click gọi hàm bên dưới
                            onClick={() => handleTodoClick(todo, idx)}
                            >
                        {todo.title}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;