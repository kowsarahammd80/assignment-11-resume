import React from 'react';
import './Blog.css'

const BlockCard = ({blog}) => {
   
  const {question, answer} = blog

  return (
    <div class="col">
      <div class="card hover">
        <div class="card-body">
          <h5 class="card-title">{question}</h5>
          <p class="card-text">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default BlockCard;