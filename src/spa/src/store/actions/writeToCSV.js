import { API_URL } from '../../config/appConfig'

export const writeCSVRequest = () => {
    return (dispatch) => {
        dispatch({ type: 'WRITE_CSV_REQUEST' })
    }
};

export const writeCSVError = (error) => {
    return (dispatch) => {
        dispatch({ type: 'WRITE_CSV_ERROR', error })
    }
};

export const writeCSV = (payload) => {
    return (dispatch) => {
        dispatch(writeCSVRequest());
        fetch(API_URL + '/api/writecsv' + `?port=${payload.port}&ip=${payload.ip}`, {
            'headers': {
                'Access-Control-Allow-Origin':'*'
            }
        }).catch(err => {
                dispatch(writeCSVError(err));
            });
    }
};