import React from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    height: '5rem',
    
}
//let style  fixed under the phantom
var phantom = {
    display: 'block',
    width: '100%',
    height: '5rem',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
            Email: andy@xxx.com<br></br>
            Address: 新北市新莊區新樹路345巷1、3號<br></br>
            Phone: XXXXXX<br></br>
            </div>
        </div>
    )
}

export default Footer
