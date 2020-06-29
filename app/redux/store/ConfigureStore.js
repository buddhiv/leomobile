import {createStore, combineReducers} from 'redux';
import UserReducer from '../reducers/UserReducer';
import AppStateReducer from '../reducers/AppStateReducer';
import PermissionsReducer from '../reducers/PermissionsReducer';

const rootReducer = combineReducers(
    {
        user: UserReducer,
        appState: AppStateReducer,
        permissions: PermissionsReducer,
    },
);
const configureStore = () => {
    return createStore(rootReducer);
};
export default configureStore;
