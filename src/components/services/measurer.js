import React from 'react';


function Measurers(props){
    return (
        
        <div>
            <h3>{props.measurer.title}</h3>
            <img  src={props.measurer.img}></img>
            <p>{props.measurer.content}</p>
        </div>
    )
}

export default Measurers;