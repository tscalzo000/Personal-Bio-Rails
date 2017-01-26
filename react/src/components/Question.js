import React from 'react';

const Question = props => {

  let answer;
  if (props.clicked) {
    answer = props.question.answer;
  } else {
    answer = '';
  }

  let buttonId;
  if (props.clicked) {
    buttonId = 'buttonOpen';
  } else {
    buttonId = 'buttonClose';
  }

  let button;
  if (props.clicked) {
    button = '-';
  } else {
    button = '+';
  }

  if (answer !== '') {
    return(
      <div id='question'>
        <div className='text-left small-12 columns' id='space'>
          <div className='small-1 columns text-left' id='space'><i className='button' id={buttonId} onClick={props.handleClick}>{button}</i></div>
          <div className='small-11 columns' id='space'>{props.question.question}</div>
        </div>
        <div className='text-left' id='answer'>
          {answer}
        </div>
      </div>
    )
  } else {
      return(
      <div id='question'>
        <p className='text-left' >
          <div className='small-1 columns' id='space'><i className='button' id={buttonId} onClick={props.handleClick}>{button}</i></div>
          <div className='small-11 columns' id='space'>{props.question.question}</div>
        </p>
      </div>
    )
  }
}

export default Question;
