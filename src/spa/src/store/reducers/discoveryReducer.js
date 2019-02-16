const initState = {
    devices: [], 
    isFetching: false,
    isFetched: false,
    error: null,
    recievedAt: null
}

const discoveryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DEVICE_REQUEST': {
            return {
                ...state,
                isFetching: true,
            }
        }
        case 'FETCH_DEVICE_SUCCESS':{
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                devices: action.payload,
                recievedAt: Date.now()
            }
        }
        case 'FETCH_DEVICE_ERROR': {
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

export default discoveryReducer;