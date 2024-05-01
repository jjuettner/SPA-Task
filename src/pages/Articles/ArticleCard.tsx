import { Badge, Button, Card } from 'react-bootstrap';
import { Article } from './article';
import * as DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { Dispatch } from 'react';
import { ActionType, ArticleAction } from './types';

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
          {props.title}
          <div style={{float:"right"}}>
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
          </div>
        </Card.Title>
        <Card.Text 
          dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} 
          style={{paddingLeft:"0rem"}}
        />
        <div style={{fontSize:"1.2rem"}}>
          {props.tags.map((tag)=>
            <Badge bg="info" style={{marginLeft:".5rem"}}>{tag.toUpperCase()}</Badge>
          )}
        </div>
        <br/>
        {props.deletable &&
          <Button 
            variant="danger" 
            onClick={()=>props.dispatch({type:ActionType.DOWN,payload:props.uuid})}
          >
            DELETE
          </Button>
        }
      </Card.Body>
    </Card>
  )
}

export default ArticleCard;