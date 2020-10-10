import React from 'react';
import './Skeleton.css'
const Skeleton = (props) => {
    let cards = []
    let numberOfCards = props.contentNumber ? parseInt(props.contentNumber) : 4;

    for (let i = 0; i < numberOfCards; i++) {
        cards.push(<div className={props.content ? "skeletonBody" : "skeletonBody animations"}>
            {props.content == "card" ? (
                <div>
                    <div className="cardImg shadow animations"></div>
                    <div className="cardHeader shadow animations"></div>
                    <div className="cardText shadow animations"></div>
                </div>
            ) : null}
            {props.content == "card-2" ? (
                <div>
                    <div className="cardImg2 shadow animations"></div>
                    <div className="cardHeader shadow animations"></div>
                    <div className="cardText shadow animations"></div>
                </div>
            ) : null}
            {props.content == "text" ? (
                <div>
                    <div className="cardHeader shadow animations"></div>
                    <div className="cardText shadow animations"></div>
                    <div className="cardBigText shadow animations"></div>
                </div>
            ) : null}
        </div>)
    }
    return (
        <div className="skeletonMain" style={{ width: props.width ? props.width : '100%' }}>
            {cards}
        </div>
    )
}
export default Skeleton