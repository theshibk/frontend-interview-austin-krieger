
export const INITIAL_SEARCH_PAGE_STATE = {
    query: '',
    searchLoading: false,
    searchError: null,
    searchResults: [],
    favoriteCount: 0,
    favoriteCountLoading: false,
    favoriteError: null
}

const SearchPageReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SEARCH': {
            return {
                ...state,
                searchLoading: true,
                searchError: null
            }
        }
        case 'SET_SEARCH_RESULTS': {
            return {
                ...state,
                searchResults: action.payload.results || [],
                searchLoading: false,
                searchError: null
            }
        }
        case 'SET_SEARCH_ERROR': {
            return {
                ...state,
                searchError: action.payload.error,
                searchLoading: false
            }
        }
        case 'SET_QUERY': {
            return {
                ...state,
                query: action.payload.query
            }
        }
        case 'GET_FAVORITE_COUNT': {
            return {
                ...state,
                favoriteCountLoading: true,
                favoriteError: null
            }
        }
        case 'SET_FAVORITE_COUNT': {
            return {
                ...state,
                favoriteCount: action.payload.count,
                favoriteCountLoading: false,
                favoriteError: null
            }
        }
        case 'SET_FAVORITE_ERROR': {
            return {
                ...state,
                favoriteCountLoading: false,
                favoriteError: action.payload.error
            }
        }
        default: throw new Error(`Invalid reducer action type: ${action.type}!`);
    }
}

export default SearchPageReducer;