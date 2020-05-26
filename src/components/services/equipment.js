import React from 'react';


function Equipment(props){
    return (
        
        <div>
            <h3>{props.equipment.title}</h3>
            <img  src={props.equipment.img}></img>
            <p>{props.equipment.content}</p>
        </div>
    )
}

export default Equipment;