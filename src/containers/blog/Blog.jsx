import React from 'react';
import './blog.scss';
import { Article } from '../../components';
import { img1, img2, img3, img4, img5 } from './imports';
function Blog() {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h2 className='gradient-text'>
          A lot is happening,
          <br /> We are blogging about it.
        </h2>
      </div>
      <div className='gpt3__blog-content'>
        <Article
          imgUrl={img1}
          date={'Sep 26, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          full={'Read Full Article'}
        />
        <Article
          imgUrl={img2}
          date={'Sep 26, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          full={'Read Full Article'}
        />
        <Article
          imgUrl={img3}
          date={'Sep 26, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          full={'Read Full Article'}
        />
        <Article
          imgUrl={img4}
          date={'Sep 26, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          full={'Read Full Article'}
        />
        <Article
          imgUrl={img5}
          date={'Sep 26, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          full={'Read Full Article'}
        />
      </div>
    </div>
  );
}

export default Blog;
