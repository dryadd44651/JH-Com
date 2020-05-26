import React from 'react';
var style = {
    width: "40%",
    // height: "30%",
}

function Product(props){
    return (
        
        <div>
            <h2>{props.product.title}</h2>
            <h4>{props.product.sub}</h4>
            <img style={style} src={props.product.img}></img>
            <p>{props.product.content}</p>
        </div>
    )
}

export default Product;