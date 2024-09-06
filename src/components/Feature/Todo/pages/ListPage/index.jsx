import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoList from '../../components/TodoList';
ListPage.propTypes = {};

function ListPage(props) {
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
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    newTodoList[idx] = newTodo;
    // update todo list
    setTodoList(newTodoList);
  };
  const history = useNavigate();

  const location = useLocation();
  const [filteredStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleShowAllClick = () => {
    setFilterStatus('all');

    const queryParams = { status: 'all' };
    history({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    history({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    setFilterStatus('new');
    const queryParams = { status: 'new' };
    history({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList
        // todoList={todoList}
        // Thay vì render dữ liệu như thường thì bây giờ sẽ có render theo filter
        todoList={renderedTodoList}
        onTodoClick={handleTodoClick}
      ></TodoList>

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
