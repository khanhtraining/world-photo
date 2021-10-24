import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
} from '../constants'

export const photoReducer = (state, action) => {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      console.log(action.payload, 'get images request')
      return {
        ...state,
        get: {
          ...state.get,
          data: null,
          fail: null,
        },
      }
    case GET_IMAGES_SUCCESS:
      console.log(action.payload, 'get images success')
      return {
        ...state,
        get: {
          ...state.get,
          data: action.payload,
          fail: null,
        },
      }
    case GET_IMAGES_FAIL:
      return {
        ...state,
        get: {
          ...state.get,
          data: null,
          fail: action.payload,
        },
      }
    default:
      return state
  }
}