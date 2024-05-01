import { ArticleState, ArticleAction, ActionType } from "./types";

export const articleReducer = (state: ArticleState, action: ArticleAction) => {
  const { type, payload } = action;
  const newState = {...state,articles: [...state.articles]}

  // get the index of the current element
  const oldIndex = newState.articles.findIndex((a)=>a.uuid === payload)
  // remove element from array
  const articleToMove = newState.articles.splice(oldIndex,1)[0]
  let newIndex

  switch (type) {
    case ActionType.UP:
      // insert element before previous position
      newIndex = oldIndex-1 < 0 ? 0 : oldIndex - 1
      newState.articles.splice(newIndex,0,articleToMove)
      break;
    case ActionType.DOWN:
      // insert element after previous position
      newIndex = oldIndex + 1 < 0 ? 0 : oldIndex + 1
      newState.articles.splice(newIndex,0,articleToMove)
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