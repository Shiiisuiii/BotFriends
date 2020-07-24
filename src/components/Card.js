import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-light-yellow dib br3 pa3 ma2 grow tc">
            <img alt="photo" src={`https://robohash.org/${props.id}`}/>
            <h2 className="">{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;