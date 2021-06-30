import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/Todolist';

const App=()=>{

    return (
        <div style={{margin: '2em'}}>
            <TodoList />
        </div>
    )

};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);