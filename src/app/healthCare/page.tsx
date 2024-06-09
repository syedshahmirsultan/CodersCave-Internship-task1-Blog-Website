import React from 'react';
import CategoriesPagesBlogs from '../components/CategoriesPagesBlogs';
import {  AllBlogType } from '../../../types';
import { getHealthcareBlogs } from '../utils/apiCalling';

const AI = async() => {
const data:AllBlogType = await getHealthcareBlogs()
    return (
        <div className='pt-30'>
          <CategoriesPagesBlogs blogData={data}/>  
        </div>
    );
}

export default AI;


