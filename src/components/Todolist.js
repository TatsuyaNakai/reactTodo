import React, {useState} from 'react';

const TodoList=()=>{
    const initialState=[
        {
            task:'牛乳かいにいく',
            isComplete:true
        },
        {
            task:'Amazonの受け取り',
            isComplete:false
        },
        {
            task:'きゃべつを買う',
            isComplete:false
        },
    ]

    const [todos, setTodos]=useState(initialState);
    const [task, setText]=useState('');
    const inputTask=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task === '')return
        // 空文字やったら、処理は戻る。
        setTodos((todos)=>[...todos, {task, isComplete:false}]);
        // todosに対して、展開した配列のあとに,で繋げて、taskとisCompleteをfalseにして再配列。
        setText('');
        // つけてから、setTextは空欄に戻してあげないといけない。
    }

    const deleteBtn=(index)=>{
        // const newTodos=[...todos];
        // newTodos.splice(index, 1);
        // 上の２行を1行のfilterで行うと以下になる。
        const newTodos=[...todos].filter((todo, todoIndex)=>todoIndex !== index);
        // filterは戻り値を取る。該当したものを（今回は配列として）返す！
        // 今回に関しては、クリックされたインデックス番号ではないものをnewTodosに代入させた。
        setTodos(newTodos);
    }

    // const handleUpdateTask=(index=>{
    //     let newTodos=todos.map((todo, todoIndex)=>{
    //         if(todoIndex === index){
    //             // 71行目でクリックした番手と配列の番手が一致（これつけないと全部が対象になる。）
    //             todo.isComplete =!todo.isComplete
    //             // isCompleteを今の状態の逆にします
    //         }   //else{
    //             return todo;
    //         // }
    //         //番手が違うものは、そのままtodoで返す。
    //         // ★ここにelseを付けると反応しない。
    //     });
    //     setTodos(newTodos);
    // })
    const handleUpdateTask=(index)=>{
        console.log(todos);
        console.log(`${todos[index]} 処理前: ${todos[index].isComplete}`);
        todos[index].isComplete = !todos[index].isComplete;
        console.log(`${todos[index]} 処理後: ${todos[index].isComplete}`);
        console.log(todos);
        setTodos(todos);
    }

    return(
        <div>
            <h1>ToDoList</h1>
            <form onSubmit={handleSubmit}>      {/* (1) */}
                {/* formでonSubmitをつけるとEnterのタイミングで送信されるようになる。 */}
            Add Task：<input type="text" value={task} onChange={inputTask}/>        {/* (2) */}
            {/* onChangeは、入力されていくたびにレンダリングされる。 */}
            </form>
            <ul>
                {todos.map((todo, index)=>(
                    <li 
                        key={index}　
                        style={todo.isComplete ===true ? {textDecoration: 'line-through'}: {} }
                        // isCompleteがtrueならcssをつける処理の三項演算子
                    >{todo.task}                
                    <span onClick={()=>handleUpdateTask(index)}>X</span></li>       // (3)
                    // key情報はつけないとエラーが発生する。
                    // 並び替えを行わない場合はindex(mapの第二引数)をつけると問題は解決する。

                    // handleUpdateTaskは、横線を引っ張るための関数

                ))}
            </ul>
        </div>

    );
};


export default TodoList;