import React from 'react';
import QuestionList from './QuestionList'

const App = props => {
  return(
    <div className='small text-center'>
      <h1 id='name'>
        <img id='pic' src='https://avatars2.githubusercontent.com/u/24193170?v=3&u=2e0fac19d74e67829fd4e0f48469a6c08e3bef53&s=400'/>
        Tori Scalzo
        <img id='pic' src='https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/15873436_10206300509312010_4609064974947498397_n.jpg?oh=04a90a10e6e91b1ba54ddac6ee51dd15&oe=59053734'/>
      </h1>
      <QuestionList data={props.data}/>
    </div>
  )
};


export default App;
