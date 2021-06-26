import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const intialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = intialState, 
    action: Action
    ):RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
            
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            // 100% certain that 'action' is SearchRepositoriesSuccessAction    
            return { loading: false, error: null, data: action.payload };

        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] }        

        default:
            return state;
    }

}

export default reducer;