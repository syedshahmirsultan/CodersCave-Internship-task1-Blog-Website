import React from 'react';
import CategoriesPagesBlogs from '../components/CategoriesPagesBlogs';
import { getAllBlogs } from '../utils/apiCalling';

const AllBlogs = async() => {
const data = await getAllBlogs()
    return (
        <div className='pt-30'>
          <CategoriesPagesBlogs blogData={data}/>  
        </div>
    );
}

export default AllBlogs;

