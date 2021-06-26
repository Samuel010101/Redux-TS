import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer'

const reducers = combineReducers({
    repositories: repositoriesReducer,
});

export default reducers;

// Esta linea de codigo me permite asignar correctamente el tipado de esta linea de codigo siguiente en el componente RepositoriesList
// const { data, error, loading } = useSelector((state) => state.repositories);
export type RootState = ReturnType<typeof reducers>;
