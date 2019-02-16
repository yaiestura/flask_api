const initState = {
    active: {},
    isActive: false,
    isFetching: false,
    isFetched: false,
    error: null,
    recievedAt: null,
    deviceData: {}
}

const deviceInfoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'MAKE_DEVICE_ACTIVE': {
            return {
                ...state,
                isActive: true,
                active: action.payload
            }
        }
        case 'FETCH_DATA_REQUEST': {
            return {
                ...state,
                isFetching: true,
            }
        }
        case 'FETCH_DATA_SUCCESS':{
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                deviceData: action.payload,
                recievedAt: Date.now()
            }
        }
        case 'FETCH_DATA_ERROR': {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                recievedAt: Date.now()
            }
        }
        default:
          return state
    }
}

export default deviceInfoReducer;