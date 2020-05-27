import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="jumbo border rounded">
            <div className="row">
                <div className="jumbotron-text float-right text-center col-md-5 offset-md-6">
                    <div className="jumbotron-header">鈞翔實業有限公司</div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <b>秉持著 可靠,誠信,專業,品質 四大原則</b>
                        </div>
                    </div>
                </div>
            </div>
            
        </Jumbotron>
    )
}