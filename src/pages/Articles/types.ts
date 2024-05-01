import { Article } from "./article";

export enum ActionType {
  UP = 'UP',
  DOWN = 'DOWN',
  DELETE = 'DELETE',
  LOAD = 'LOAD'
}

export interface ArticleState {
  articles: Article[];
}

export interface ArticleAction {
  type: string;
  payload?: string;
}