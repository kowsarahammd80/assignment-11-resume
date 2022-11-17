import React, { useEffect, useState } from 'react';
import UseTitle from '../Title/Title';
import BlockCard from './BlockCard';

const Block = () => {
  UseTitle("Blogs")
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setblogs(data))
  },[])

  return (
    <div className='container'>

       <h3 className='mt-3 text-center'>Answer of Question</h3>

        <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
      
      {
        blogs.map(blog => <BlockCard key={blog.id} 
         blog={blog}
        ></BlockCard>)
      }
      
    </div>
    </div>
  );
};

export default Block;