import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Article, articles as articleData } from './article';
import * as DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, useReducer } from 'react';
import FileUpload from '../../components/FileUpload';
import logo from './logo.svg'

enum ActionType {
  UP = 'UP',
  DOWN = 'DOWN',
  DELETE = 'DELETE',
  LOAD = 'LOAD'
}

interface ArticleState {
  articles: Article[];
}

export interface ArticleAction {
  type: string;
  payload?: string;
}

const articleReducer = (state: ArticleState, action: ArticleAction) => {
  const { type, payload } = action;
  const newState = {...state}

  const articleIndex = state.articles.findIndex((a)=>a.uuid === payload)
  // remove element from array
  const article = newState.articles.splice(articleIndex,1)[0]

  switch (type) {
    case ActionType.UP:
      // insert element before previous position
      newState.articles.splice(articleIndex-1,0,article)
      break;
    case ActionType.DOWN:
      // insert element after previous position
      newState.articles.splice(articleIndex+1,0,article)
      break;
    case ActionType.DELETE:
      // nothing, just don't reinsert element
      break;
    case ActionType.LOAD:
      newState.articles = JSON.parse(payload as string)

  }

  // set the new indexes according to their position in the articles array
  newState.articles.forEach((article,index)=>article.sortIndex = index)

  return newState
}

const ArticleContent = () => {
  // const [articles,setArticles] = useState<Article[]>(articleData.sort((a,b)=> a.sortIndex - b.sortIndex))
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


interface ArticleCardProps extends Article {
  dispatch: Dispatch<ArticleAction>;
}

const ArticleCard = (props:ArticleCardProps) => {
  // we need to sanitize content in order to prevent XSS attacks
  const sanitizedHtmlContent = DOMPurify.sanitize(props.message)
  
  return(
    <Card >
      <Card.Body>
        <Card.Title>
          <Container>
            <Row>
              <Col sm={11}>
                {props.title}
              </Col>
              <Col sm={1}>
                <Button 
                  variant="tertiary" 
                  onClick={()=>props.dispatch({type:ActionType.UP,payload:props.uuid})}
                >
                  <FontAwesomeIcon icon={faAnglesUp} />
                </Button>
                <Button 
                  variant="tertiary" 
                  onClick={()=>props.dispatch({type:ActionType.DOWN,payload:props.uuid})}
                >
                  <FontAwesomeIcon icon={faAnglesDown} />
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}/>
        {props.deletable &&
          <Button variant="danger" onClick={()=>props.dispatch({type:ActionType.DOWN,payload:props.uuid})}>DELETE</Button>
        }
      </Card.Body>
    </Card>
  )
}

export default ArticleContent;