import React from 'react';
import { getAiBlogs } from '../utils/apiCalling';
import CategoriesPagesBlogs from '../components/CategoriesPagesBlogs';

const AI = async() => {
const data = await getAiBlogs()
    return (
        <div className='pt-30'>
          <CategoriesPagesBlogs blogData={data}/>  
        </div>
    );
}

export default AI;
