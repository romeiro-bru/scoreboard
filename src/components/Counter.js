import React from 'react';
import Proptypes from 'prop-types';

const Counter = (props) => {
    let index = props.index;

      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
          <span className="counter-score">{ props.score }</span>
          <button className="counter-action increment" onClick={() => props.changeScore(index, +1)}> + </button>
        </div>
      )};

      // validating numbers and function
  Counter.proptypes = {
    index: PropTypes.number ,
    score: PropTypes.number,
    changeScore: PropTypes.func
  };

  export default Counter;