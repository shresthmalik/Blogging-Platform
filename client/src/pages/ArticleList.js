import React from 'react'
import { Link } from 'react-router-dom';
import articleContent from './ArticleContent';
import ReuseArticle from '../components/ReuseArticle';
const ArticleList = () => {
  return (
    <>
      
      <h1 className='text-3xl font-bold'>Articles</h1>
      <div className=' py-8 '>

      
      <div className='flex flex-wrap'>
       <ReuseArticle articles={articleContent}/>
      
      </div>
      </div>

    </>
  )
}

export default ArticleList


