import React from 'react';
import './acticle.scss';

const Article = ({ imgUrl, date, title, full }) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-img'>
        <img src={imgUrl} alt='' />
      </div>
      <div className='gpt3__article-container'>
        <div className='gpt3__article-text'>
          <p className='gpt3__article-date'>{date}</p>
          <p className='gpt3__article-title'>{title}</p>
        </div>
        <p className='gpt3__article-full'>{full}</p>
      </div>
    </div>
  );
};

export default Article;
