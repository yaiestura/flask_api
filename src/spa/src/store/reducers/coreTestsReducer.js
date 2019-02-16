const initState = {
    core_tests: [],
    isFetching: false,
    isFetched: false,
    error: null,
    recievedAt: null,    
}

const coreTestsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_CORE_TEST_REQUEST': {
            return {
                ...state,
                isFetching: true,
            }
        }
        case 'FETCH_CORE_TEST_SUCCESS':{
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                core_tests: action.payload,
                recievedAt: Date.now()
            }
        }
        case 'FETCH_CORE_TEST_ERROR': {
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

export default coreTestsReducer;