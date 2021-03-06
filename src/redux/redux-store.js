import { combineReducers, createStore } from "redux";
import directReducer from "./direct-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    directPage: directReducer,
    newsPage: newsReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

window.store = store;
export default store;