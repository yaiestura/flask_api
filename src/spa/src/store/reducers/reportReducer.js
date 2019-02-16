const initState = {
    activeCam: {},
    isActive: false,
    response: "",
    isProcessing: false,
    hasProcessed: false,
    error: null,
    recievedAt: null, 
    showDashboardComponents: true 
}

const coreTestsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'MAKE_DEVICE_ACTIVE': {
            return {
                ...state,
                isActive: true,
                activeCam: action.payload
            }
        }
        case 'FETCH_FUNCTION_REQUEST': {
            return {
                ...state,
                isProcessing: true,
            }
        }
        case 'FETCH_FUNCTION_SUCCESS':{
            return {
                ...state,
                isProcessing: false,
                hasProcessed: true,
                response: action.payload,
                recievedAt: Date.now()
            }
        }
        case 'FETCH_FUNCTION_ERROR': {
            return {
                ...state,
                isProcessing: false,
                error: action.error,
                recievedAt: Date.now()
            }
        }

        case 'HIDE_COMPONENTS_REQUEST': {
            return {
                ...state,
                showDashboardComponents: false 
            }
        }

        case 'SHOW_COMPONENTS_REQUEST': {
            return {
                ...state,
                showDashboardComponents: true 
            }
        }

        default:
          return state
    }
}

export default coreTestsReducer;