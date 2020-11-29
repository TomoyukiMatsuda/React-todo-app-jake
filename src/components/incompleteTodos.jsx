import React from 'react';

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  
    return (
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  };