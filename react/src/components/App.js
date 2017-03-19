import React from 'react';
import QuestionList from './QuestionList';

const App = props => {
  return(
    <div className='small text-center'>
      <h1 id='name'>
        <img id='pic' src='https://avatars2.githubusercontent.com/u/24193170?v=3&u=2e0fac19d74e67829fd4e0f48469a6c08e3bef53&s=400'/>
        <tr/>Tori Scalzo
      </h1>
      <QuestionList data={props.data}/>
    </div>
  )
};


export default App;
