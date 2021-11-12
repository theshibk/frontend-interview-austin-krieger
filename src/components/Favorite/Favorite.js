import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './Favorite.css';

function Favorite(props) {
    const {
        starred
    } = props;

    return (
        <div className="Favorite">
            {
                starred ? <AiFillStar /> : <AiOutlineStar />
            }
        </div>
    )
}

export default Favorite;