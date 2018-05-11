import React form 'react';

function todo(props) {
  return (
    <div>
      <button onClick={props.deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo;
