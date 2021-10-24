import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
} from '../constants'

const getImagesRequest = () => ({
  type: GET_IMAGES_REQUEST,
})

const getImagesSuccess = payload => ({
  type: GET_IMAGES_SUCCESS,
  payload,
})

const getImagesFail = error => ({
  type: GET_IMAGES_FAIL,
  payload: error,
})

export { getImagesRequest, getImagesSuccess, getImagesFail }
