import {
  GET_IMAGES_LOADING,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
  SEARCH_IMAGES_LOADING,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAIL,
} from '../constants'

const getImagesRequest = () => ({
  type: GET_IMAGES_LOADING,
})

const getImagesSuccess = payload => ({
  type: GET_IMAGES_SUCCESS,
  payload,
})

const getImagesFail = error => ({
  type: GET_IMAGES_FAIL,
  payload: error,
})

const searchImagesRequest = () => ({
  type: SEARCH_IMAGES_LOADING,
})

const searchImagesSuccess = payload => ({
  type: SEARCH_IMAGES_SUCCESS,
  payload,
})

const searchImagesFail = error => ({
  type: SEARCH_IMAGES_FAIL,
  payload: error,
})

export {
  getImagesRequest,
  getImagesSuccess,
  getImagesFail,
  searchImagesRequest,
  searchImagesSuccess,
  searchImagesFail,
}
