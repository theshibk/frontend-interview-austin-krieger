import React from 'react';
import { PLACEHOLDER_IMAGE } from '../../constants';

function CompanyResult(props) {
    const {
        name,
        description,
        address = {},
        image
    } = props;

    const {
        address1,
        city,
        postalCode,
        state
    } = address;

    return (
        <div className="CompanyResult">
            <img className="SearchResult__image" src={PLACEHOLDER_IMAGE} alt={name}/>
            <div className="SearchResult__text-container">
                <div className="SearchResult__title">
                    {name}
                </div>
                <div className="SearchResult__subtitle">
                    {description}
                </div>
                <div className="SearchResult__subtitle">
                    {`${address1} ${city}, ${state} ${postalCode}`}
                </div>
            </div>
        </div>
    )
}

export default CompanyResult;