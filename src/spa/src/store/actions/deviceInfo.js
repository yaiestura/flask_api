import { API_URL } from '../../config/appConfig'

export const makeActive = (payload) => {
    return (dispatch) => {
      dispatch({ type: 'MAKE_DEVICE_ACTIVE', payload })
    }
  };

export const fetchDataRequest = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' })
    }
};

export const fetchDataSuccess = (payload) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload })
    }
};

export const fetchDataError = (error) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_DATA_ERROR', error })
    }
};

export const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(makeActive(payload));
        dispatch(fetchDataRequest());
        fetch(API_URL + '/api/deviceinfo' + `?port=${payload.port}&ip=${payload.ip}`, {
            'headers': {
                'Access-Control-Allow-Origin':'*'
            }
        })
            .then(response => response.json())
            .then((data) => {
                dispatch(fetchDataSuccess(data));
            }).catch(err => {
                dispatch(fetchDataError(err));
            });
    }
};


