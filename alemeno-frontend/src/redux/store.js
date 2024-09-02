import { legacy_createStore } from "redux";
import { rootReducer } from "./reducer";


const initialState = {
    isLoading: false,
    isError: false,
    courses: []
}
export const store = legacy_createStore(rootReducer, initialState)