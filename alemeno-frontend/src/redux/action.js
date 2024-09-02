import { ERROR, LOADING, MARK_COMPLETED, SUCCESS } from "./actionTypes"

export const successAction = (payload) => {
    return { type: SUCCESS, payload: payload }
}

export const errorAction = () => {
    return { type: ERROR }
}

export const loadingAction = () => {
    return { type: LOADING }
}

export const markCompletedAction = (payload) => {
    return { type: MARK_COMPLETED, payload: payload }
}