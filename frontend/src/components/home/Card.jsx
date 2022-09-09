import "./Card.css"
import React from 'react'

export default (props) => {
    const styleCard = {
        backgroundColor : props.color || '#FF0',
        borderColor : props.color || '#FF0'
    }
    return (
        <div className="Card" style={styleCard}>
            <div className="Title">
                <strong><span className="text-white">{props.title}</span></strong>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}