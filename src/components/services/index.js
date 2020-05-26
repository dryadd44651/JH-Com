import React from 'react';

var style = {
    width: "90%",
    height: "50%",
}



function Services(props){

    const viewEqu = (id) => {
        window.location.href = `/services/equipment/${id}`;
    }
    const viewMea = (id) => {
        window.location.href = `/services/measurer/${id}`;
    }
    return (
        
        <div className="container pt-30 ">
            <div className="d-flex justify-content-center"><h1><b>生產設備</b></h1></div>
            
            <div className="row pt-3 justify-content-center">
                {props.equipment.map( equi => {
                        return (
                            <div key={equi.id} className="col-sm-3 m-1 ">
                            <h4>{equi.title}</h4>
                            <img  onClick={() => viewEqu(equi.id)} className="img-thumbnail" style={style} src={equi.img}></img>
                            <p>{equi.content}</p>
                            </div>
                        )
                    })}
            </div>
            <div className="d-flex justify-content-center"><h1><b>測量儀器</b></h1></div>
            <div className="row pt-3 justify-content-center">
                {props.measurer.map( mea => {
                        return (
                            <div key={mea.id} className="col-sm-3 m-1 ">
                            <h4>{mea.title}</h4>
                            <img onClick={() => viewMea(mea.id)} className="img-thumbnail" style={style} src={mea.img}></img>
                            <p>{mea.content}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Services;