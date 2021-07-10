import {action_types} from '../constants/action_types'

export const set_movies = (product) => {
    return{
        type: action_types.SET_MOVIES,
        payload: product
    }
}

export const set_movie = (product) => {
    return{
        type: action_types.SET_MOVIE,
        payload: product
    }
}
export const set_seasons = (product) => {
    return{
        type: action_types.SET_SEASONS,
        payload: product
    }
}
export const set_images = (product) => {
    return{
        type: action_types.SET_IMAGES,
        payload: product
    }
}