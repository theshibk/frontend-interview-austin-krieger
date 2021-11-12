import React from 'react';

function FavoriteCount(props) {
    const { count, loading, error } = props;

    if (loading) {
        return (<div>Loading...</div>)
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="FavoriteCount">
            Favorites: {count}
        </div>
    )
}

export default FavoriteCount;