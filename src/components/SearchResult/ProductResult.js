import React from 'react';
import { PLACEHOLDER_IMAGE } from '../../constants';

function ProductResult(props) {
    const {
        name,
        previewText,
        image,
        productCategory
    } = props;

    return (
        <div className="AnimalResult">
            <img className="SearchResult__image" src={image || PLACEHOLDER_IMAGE} alt={name}/>
            <div className="SearchResult__text-container">
                <div className="SearchResult__title">
                    {name}
                </div>
                <div className="SearchResult__subtitle">
                    {previewText}
                </div>
                <div className="SearchResult__tag">
                    {productCategory}
                </div>
            </div>
        </div>
    )
}

export default ProductResult;