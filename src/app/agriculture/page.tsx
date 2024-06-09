import React from 'react';
import CategoriesPagesBlogs from '../components/CategoriesPagesBlogs';
import { getAgricultureBlogs } from '../utils/apiCalling';

const Agriculture = async() => {
const data = await getAgricultureBlogs()
    return (
        <div className='pt-30'>
          <CategoriesPagesBlogs blogData={data}/>  
        </div>
    );
}

export default Agriculture;
