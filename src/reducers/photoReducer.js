import {
  GET_IMAGES_LOADING,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
  SEARCH_IMAGES_LOADING,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAIL,
} from '../constants'

export const photoReducer = (state, action) => {
  switch (action.type) {
    case GET_IMAGES_LOADING:
      return {
        ...state,
        photo: {
          ...state.photo,
          loading: true,
        },
      }
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: action.payload,
          fail: null,
          loading: false,
        },
      }
    case GET_IMAGES_FAIL:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: null,
          fail: action.payload,
          loading: false,
        },
      }
    case SEARCH_IMAGES_LOADING:
      return {
        ...state,
        photo: {
          ...state.photo,
          loading: true,
        },
      }
    case SEARCH_IMAGES_SUCCESS:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: action.payload,
          fail: null,
          loading: false,
        },
      }
    case SEARCH_IMAGES_FAIL:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: null,
          fail: action.payload,
          loading: false,
        },
      }
    default:
      return state
  }
}
