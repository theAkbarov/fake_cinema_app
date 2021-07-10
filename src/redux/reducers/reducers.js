import { action_types } from '../constants/action_types'

const initialState = {
    movies: [],
    movie: [],
    token: "",
    search: []
}
export const movie_reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case action_types.SET_MOVIES:
            return {
                ...state,
                movies: payload
            };

        case action_types.SET_MOVIE:
            return {
                ...state,
                movie: payload
            };
        case action_types.SET_SEASONS:
            return {
                ...state,
                seasons: payload
            };
        case action_types.SET_IMAGES:
            return {
                ...state,
                images: payload
            };

        case action_types.SET_TOKEN:
            return {
                ...state,
                token: payload
            };

        case action_types.SET_SEARCHED:
            return {
                ...state,
                searched: payload
            }

        default:
            return { state }
    }
}