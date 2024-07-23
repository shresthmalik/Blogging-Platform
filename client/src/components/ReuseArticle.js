import React from 'react';
import articleContent from '../pages/ArticleContent';
import { Link } from 'react-router-dom';

const ReuseArticle = ({articles}) => {
  return (
    <>
      {articles.map((article, key) => (
        <div key={key} className='w-1/2 border-2 border-gray-200 border-opacity-60 overflow-hidden mb-5 '>

        <Link to={`/article/${article.name}`} >
          <img src={article.thumbnail} alt='blog' className='lg:h-48 md:h-36 w-full object-cover object-center'></img>
          <h3 className='text-lg font-medium leading-relaxed p-2'>{article.title}</h3>
          
        <p className='ml-2 text-sm'>{article.content[0].substring(0, 100)}...</p>
        <p className='text-purple-600 font-medium m-2'>Learn More...</p>
        </Link>
        </div>
      ))}
    </>
  )
}

export default ReuseArticle
