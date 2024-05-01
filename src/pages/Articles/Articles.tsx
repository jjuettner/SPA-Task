import { articles as articleData } from './article';
import { useReducer } from 'react';
import FileUpload from '../../components/FileUpload';
import { ActionType } from './types';
import ArticleCard from './ArticleCard';
import { articleReducer } from './reducer';

const ArticleContent = () => {
  const [state, dispatch] = useReducer(articleReducer, { articles: articleData.sort((a,b)=> a.sortIndex - b.sortIndex) });
  
  return (<>
    <FileUpload onFileChange={(filecontent)=>{dispatch({type:ActionType.LOAD,payload:filecontent as string})}}/>
    <br/>
    <h3>Articles</h3>
    {state.articles.map((article)=>
      <ArticleCard {...article} dispatch={dispatch} key={article.uuid}/>
    )}
  </>
  );
}

export default ArticleContent;