import React from 'react';

var style = {
    width: "90%",
    height: "50%",
}

function Product(props){
    const viewProd = (id) => {
        window.location.href = `/product/${id}`;
    }

    

    return (
        
        <div className="container pt-30 ">
            
            <div className="row pt-3 justify-content-center">
                {
                    props.products.map( product => {
                        return (
                            <div key={product.id} className="col-sm-3 m-1 ">
                            <h3>{product.title}</h3>
                            <h4>{product.sub}</h4>
                            <img onClick={() => viewProd(product.id)} className="img-thumbnail" style={style} src={product.img}></img>
                            <p>{product.content}</p>
                            </div>
                        )
                    })
                }
                
 
            </div>
        </div>
    )
}

export default Product;