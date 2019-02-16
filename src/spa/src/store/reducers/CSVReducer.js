const initState = {
    isWriting: false,
    error: null,
    recievedAt: null,    
}

const CSVReducer = (state = initState, action) => {
    switch (action.type) {
        case 'WRITE_CSV_REQUEST': {
            return {
                ...state,
                isWriting: true,
            }
        }
        case 'WRITE_CSV_ERROR': {
            return {
                ...state,
                isWriting: false,
                error: action.error,
                recievedAt: Date.now()
            }
        }
        default:
          return state
    }
}

export default CSVReducer;