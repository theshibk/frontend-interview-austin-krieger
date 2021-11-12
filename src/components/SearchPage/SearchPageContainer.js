import React, { useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';
import SearchPageReducer, { INITIAL_SEARCH_PAGE_STATE } from './SearchPageReducer';
import { createAction, BASE_URL, PAGE_SIZE } from '../../constants';
import SearchPage from './SearchPage';
import debounce from 'lodash.debounce';


function SearchPageContainer() {
    const [state, dispatch] = useReducer(SearchPageReducer, INITIAL_SEARCH_PAGE_STATE);

    const fetchSearchResults = async (q) => {
        try {
            dispatch(createAction('SEARCH'));
            const response = await axios.get(BASE_URL, {
                params: {
                    q,
                    _limit: PAGE_SIZE
                }
            });

            dispatch(createAction('SET_SEARCH_RESULTS', {results: response.data}));
        } catch (e) {
            dispatch(createAction('SET_SEARCH_ERROR', {error: e.message}));
            console.log(e);
        }
    }

    const fetchStarCount = async () => {
        try {
            dispatch(createAction('GET_FAVORITE_COUNT'));
            const response = await axios.get(BASE_URL, {
                params: {
                    starred: true
                }
            });
            dispatch(createAction('SET_FAVORITE_COUNT', { count: response.data.length}))
        } catch (e) {
            dispatch(createAction('SET_SEARCH_ERROR', {error: e.message}));
            console.log(e);
        }
    }

    useEffect(() => {
        fetchStarCount();
    }, []);

    const debouncedFetchSearchResults = useCallback(debounce((q) => fetchSearchResults(q), 300), []);

    const { query } = state;
    useEffect(() => {
        debouncedFetchSearchResults(query);
    }, [query, debouncedFetchSearchResults]);

    const handleSearchChange = (e) => {
        dispatch(createAction('SET_QUERY', { query: e.target.value}));
    }

    const handleFavoriteResult = async (id, starred) => {
        try {
            await axios.patch(`${BASE_URL}/${id}`, {
                starred: !starred
            });
            await fetchSearchResults(query);
            await fetchStarCount();
        } catch (e) {
            // Probably want a toaster or something here
            console.log(e);
        }
    }

    return (
        <SearchPage
            {...state}
            handleSearchChange={handleSearchChange}
            handleFavoriteResult={handleFavoriteResult}
            fetchStarCount={fetchStarCount}
        />
    )
}

export default SearchPageContainer;