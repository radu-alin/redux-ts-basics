// interfaces that describes actions from the app

import {ActionType} from '../action-types'

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrrorAction;