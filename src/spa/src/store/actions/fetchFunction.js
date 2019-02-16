import { API_URL } from '../../config/appConfig'

export const makeActiveCam = (payload) => {
  return (dispatch) => {
    dispatch({ type: 'MAKE_DEVICE_ACTIVE', payload })
  }
};

export const fetchRequest = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_FUNCTION_REQUEST' })
  }
};

export const fetchSuccess = (payload) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_FUNCTION_SUCCESS', payload })
  }
};

export const fetchError = (error) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_FUNCTION_ERROR', error })
  }
};


export const fetchFunction = (device, functionName) => {
  return (dispatch) => {
    dispatch(makeActiveCam(device));
    dispatch(fetchRequest());
    fetch(API_URL + '/api/core_test/' + functionName + `?port=${device.port}&ip=${device.ip}`, {
      'headers': {
          'Access-Control-Allow-Origin':'*'
      }
    })
      .then(response => response.json())
      .then((data) => {
        dispatch(fetchSuccess(data));
      }).catch(err => {
        dispatch(fetchError(err));
      });
  }
};

export const hideRequest = () => {
    return (dispatch) => {
      dispatch({ type: 'HIDE_COMPONENTS_REQUEST' })
    }
  };

export const showRequest = () => {
    return (dispatch) => {
      dispatch({ type: 'SHOW_COMPONENTS_REQUEST' })
    }
  };