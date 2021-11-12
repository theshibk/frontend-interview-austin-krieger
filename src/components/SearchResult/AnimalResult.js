import React from 'react';
import { PLACEHOLDER_IMAGE } from '../../constants';

function AnimalResult(props) {
    const {
        name,
        taxonomy = {},
        image
    } = props;

    return (
        <div className="AnimalResult">
            <img className="SearchResult__image" src={image || PLACEHOLDER_IMAGE} alt={name}/>
            <div className="SearchResult__text-container">
                <div className="SearchResult__title">
                    {name}
                </div>
                <div className="SearchResult__subtitle">
                    {taxonomy?.scientificName}
                </div>
            </div>
        </div>
    )
}

export default AnimalResult;