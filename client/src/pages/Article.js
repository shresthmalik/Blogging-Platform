import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './ArticleContent';
import ReuseArticle from '../components/ReuseArticle';
import NotFound from './NotFound';
import CommentsList from '../components/CommentsList';
import AddComment from '../components/AddComment';
const Article = () => {
  const { id } = useParams();
  const [articleInfo, setArticleInfo] = useState({  comments: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${id}`);
      const body = await result.json();
      setArticleInfo(body);
      console.log(body);
    }
    fetchData();
  }, [id]);
 
  const article = articleContent.find(article => article.name === id);
  //explaination of the above line:

  // const article = articleContent.find(function(article) {    //find is a function that takes a function as an argument
  //   return article.name === name;                            //the function that find takes as an argument is called for each article in articleContent
  // });                                                        //the function that find takes as an argument returns true if the article name matches the name in the url
  //                                                            //find returns the first article that returns true
  //                                                            //find returns undefined if no article returns true
  if (!article) return <NotFound/>
  const otherarticles = articleContent.filter(article => article.name !== id);
  return (
    <div>
      <h1 className='text-3xl font-bold mb-3'> {article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <AddComment articleName={id} setArticleInfo={setArticleInfo}/>
      <h1 className='text-2xl font-semibold mt-5'>Other Articles</h1>
      <div className='flex flex-wrap mt-4'>
      <ReuseArticle articles={otherarticles}/>
        </div>
    </div>
  )
}

export default Article
