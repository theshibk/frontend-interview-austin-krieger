import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import FavoriteCount from '../FavoriteCount/FavoriteCount';
import './SearchPage.css';

function SearchPage(props) {
    const {
        query,
        searchLoading,
        searchError,
        searchResults,
        favoriteCount,
        favoriteCountLoading,
        favoriteError,
        handleSearchChange,
        handleFavoriteResult
    } = props;

    const renderBody = () => {
        if (searchLoading) {
            return <div className="SearchPage__loading">{'Loading...'}</div>
        }

        if (searchError) {
            return <div className="SearchPage__error">{searchError}</div>
        }

        if (!searchResults || searchResults.length === 0) {
            return (
                <div className="SearchPage__no-results">
                    There are no results found for this query!
                </div>
            );
        }

        return (
            <>
                <FavoriteCount count={favoriteCount} loading={favoriteCountLoading} error={favoriteError}/>
                {searchResults.map((result) => <SearchResult key={result.id} {...result} onFavorite={handleFavoriteResult}/>)}
            </>
        );
    }

    return (
        <div className="SearchPage">
            <div className="SearchPage__header">
                <input className="SearchPage__input" value={query} onChange={handleSearchChange} placeholder="Search..."/>
            </div>
                <div className="SearchPage__results-container">
                    {renderBody()}
                </div>
        </div>
    );
}

export default SearchPage;