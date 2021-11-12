import React from 'react';
import AnimalResult from './AnimalResult';
import ProductResult from './ProductResult';
import CompanyResult from './CompanyResult';
import Favorite from '../Favorite/Favorite';

import './SearchResult.css';

function SearchResult(props) {
    const {
        onFavorite,
        id,
        starred
    } = props;

    const renderContent = () => {
        const { type, ...rest } = props;
        switch (type) {
            case 'animal': return (
                <AnimalResult {...rest}/>
            );
            case 'product': return (
                <ProductResult {...rest}/>
            );
            case 'company': return (
                <CompanyResult {...rest} />
            );
        }
    }

    const handleClick = () => {
        onFavorite(id, starred);
    }

    return (
        <div className="SearchResult" onClick={handleClick}>
            <div>
                {renderContent()}
            </div>
            <Favorite starred={starred} />
        </div>
    )
}

export default SearchResult;
