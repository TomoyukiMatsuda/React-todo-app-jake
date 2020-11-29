import React, { useEffect, useState } from 'react';
import './index.css';
import { InputTodo } from './components/inputTodo';
import { IncompleteTodos } from './components/incompleteTodos';
import { CompleteTodos } from './components/completeTodos';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了TODO削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // 完了TODO
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    // 削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    // 追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

    return (
      <>
        <InputTodo
         todoText={todoText}
         onChange={onChangeTodoText}
         onClick={onClickAdd}
         // TODOが５個以上でtrueを渡す
         disabled={incompleteTodos.length >= 5}
        />
        { incompleteTodos.length >= 5 && (<p>登録できるのは５個まで！消化しなさい〜</p>) }
        <IncompleteTodos
         incompleteTodos={incompleteTodos}
         onClickComplete={onClickComplete}
         onClickDelete={onClickDelete}
        />
        <CompleteTodos
         completeTodos={completeTodos}
         onClickBack={onClickBack}
        />
      </>
    )

};

export default App;
