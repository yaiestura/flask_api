import { API_URL } from '../../config/appConfig'

export const fetchRequest = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CORE_TEST_REQUEST' })
  }
};

export const fetchSuccess = (payload) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CORE_TEST_SUCCESS', payload })
  }
};

export const fetchError = (error) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CORE_TEST_ERROR', error })
  }
};


export const fetchTest = (test) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(API_URL + '/api/'+ test + '_test/load')
      .then(response => response.json())
      .then((data) => {
        dispatch(fetchSuccess(data));
      }).catch(err => {
        dispatch(fetchError(err));
      });
  }
};