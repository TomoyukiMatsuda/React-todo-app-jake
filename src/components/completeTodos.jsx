import React from 'react';

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
      {completeTodos.map((todo, index) => {
        return (
          <div key={index} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
        );
      })}
      </ul>
    </div>
  );
};
