import { combineReducers, createStore } from "redux";
import directReducer from "./direct-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    directPage: directReducer,
    newsPage: newsReducer
});
let store = createStore(reducers);


export default store;