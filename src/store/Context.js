import React, { createContext, useContext } from 'react';
import { initState } from './reducer';
import { useReducer } from 'react';
import {
    FETCH_COCKTAILS_SUCCESS,
    FETCH_COCKTAILS_FAILURE,
    GET_COCKTAIL_FAILURE,
    GET_COCKTAIL_SUCCESS,
    SET_LOADING
} from './Actions';
import reducer from './reducer';
import axios from 'axios';

const searchByNameAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const getItemByIdAPI = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
//create a context 
const GlobalContext = createContext(null);

// provider 
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    // fetchDrinks 
    const fetchCocktails = async () => {
        try {
            const response = await axios.get(`${searchByNameAPI}${state.searchKeywords}`, {
                headers: {
                    Accept: "application/json",
                }
            });
            const { data } = response;
            dispatch({
                type: FETCH_COCKTAILS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: FETCH_COCKTAILS_FAILURE,
            })
            console.log(`Error fetching with keywords: ${state.searchKeywords}`);
        }
    }
    const fetchSingleCocktail = async (id) => {
        dispatch({
            type: SET_LOADING
        })
        try {
            const response = await axios.get(`${getItemByIdAPI}${id}`, {
                headers: {
                    Accept: "application/json",
                }
            });
            const { data } = response;

            dispatch({
                type: GET_COCKTAIL_SUCCESS,
                payload: data.drinks[0]
            })

        }
        catch (error) {
            dispatch({
                type: GET_COCKTAIL_FAILURE,
            })
            console.log(`Error fetching with id: ${id}`);
        }
    }
    return <GlobalContext.Provider value={{
        initState, state, dispatch,
        fetchCocktails, fetchSingleCocktail,
        searchByNameAPI, getItemByIdAPI
    }}>
        {children}
    </GlobalContext.Provider>
}


// custom useContext hook
const useGlobalContext = () => {
    return useContext(GlobalContext);
}

// export context, useContext custom hook

export { useGlobalContext, GlobalContext };
export default GlobalProvider;

