import { ActionType } from '../action-types'


// // Definimos la interface propia para el action que recibe la función 
// interface Action {
//     type: string;
//     payload?: any;
// }

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR
    payload: string;
}

export type Action = 
    | SearchRepositoriesAction                 
    | SearchRepositoriesSuccessAction 
    | SearchRepositoriesErrorAction
