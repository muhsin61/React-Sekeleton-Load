import React from 'react';
import './Skeleton.css'
export default function Skeleton(props){
    let cards = []
    let numberOfCards = props.contentNumber ? parseInt(props.contentNumber) : 4;
    for(let i = 0; i < numberOfCards ; i++){
        cards.push(<div className="skeletonBody"></div>)
    }

     



    return(
        <div className="skeletonMain" style={{width: props.width ? props.width : '100%'}}>
            {cards}
        </div>

    )
}