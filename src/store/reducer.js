import {
    CHANGE_SEARCH_KEY,
    FETCH_COCKTAILS_FAILURE,
    FETCH_COCKTAILS_SUCCESS,
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR,
    SET_LOADING,
    GET_COCKTAIL_SUCCESS,
    GET_COCKTAIL_FAILURE
} from "./Actions";

const initState = {
    isLoading: false,
    searchKeywords: '',
    cocktails: [],
    sidebarIsOpen: false,
    singleCocktail: null
}


const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_KEY:
            return { ...state, searchKeywords: action.payload, isLoading: true }
        case FETCH_COCKTAILS_SUCCESS:
            return {
                ...state, cocktails: action.payload.drinks,
                isLoading: false
            }
        case FETCH_COCKTAILS_FAILURE:
            return {
                ...state, isLoading: true
            }
        case OPEN_SIDEBAR:
            return {
                ...state, sidebarIsOpen: true
            }
        case CLOSE_SIDEBAR:
            return {
                ...state, sidebarIsOpen: false
            }
        case SET_LOADING:
            return {
                ...state, isLoading: true
            }
        case GET_COCKTAIL_FAILURE:
            return {
                ...state, isLoading: false, singleCocktail: null
            }
        case GET_COCKTAIL_SUCCESS:
            return {
                ...state, isLoading: false, singleCocktail: action.payload
            }
        default:
            throw new Error(`the action : ${action.type} is not match`)
    }
}

export { initState };

export default reducer;