import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
  SEARCH_IMAGES_REQUEST,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAIL,
} from '../constants'

export const photoReducer = (state, action) => {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: null,
          fail: null,
        },
      }
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: action.payload,
          fail: null,
        },
      }
    case GET_IMAGES_FAIL:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: null,
          fail: action.payload,
        },
      }
    case SEARCH_IMAGES_REQUEST:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: null,
          fail: null,
        },
      }
    case SEARCH_IMAGES_SUCCESS:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: action.payload,
          fail: null,
        },
      }
    case SEARCH_IMAGES_FAIL:
      return {
        ...state,
        photo: {
          ...state.photo,
          data: null,
          fail: action.payload,
        },
      }
    default:
      return state
  }
}
