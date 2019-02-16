import { API_URL } from '../../config/appConfig'

export const fetchRequest = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DEVICE_REQUEST' })
  }
};

export const fetchSuccess = (payload) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DEVICE_SUCCESS', payload })
  }
};

export const fetchError = (error) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DEVICE_ERROR', error })
  }
};


export const fetchDevices = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(API_URL + '/api/discovery')
      .then(response => response.json())
      .then((data) => {
        dispatch(fetchSuccess(data));
      }).catch(err => {
        dispatch(fetchError(err));
      });
  }
};