import React from 'react';

var style = {
    width: "90%",
    height: "50%",
}

function Product(){
    const equipment = [
        {title: 'IR輸送式乾燥機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: 'LSR射出機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '固態真空油壓機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '裁切機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '印刷台', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '中型平面網印機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '電動跑檯式退料網印機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '混料機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '烤箱', img:'/assets/imgs/logo.png',content:'XXX...'},
    ]
    const measurer = [
        {title: '壽命測試機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '荷重曲線量測儀器', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '放大檢視鏡', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '耐摩擦試驗機', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '游標卡尺', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '硬度計', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '厚薄規', img:'/assets/imgs/logo.png',content:'XXX...'},
        {title: '厚薄規', img:'/assets/imgs/logo.png',content:'XXX...'},
        
    ]

    return (
        
        <div class="container pt-30 ">
            <div class="d-flex justify-content-center"><h1><b>生產設備</b></h1></div>
            
            <div class="row pt-3 justify-content-center">
                {equipment.map( equi => {
                        return (
                            <div class="col-sm-3 m-1 ">
                            <h4>{equi.title}</h4>
                            <img class="img-thumbnail" style={style} src={equi.img}></img>
                            <p>{equi.content}</p>
                            </div>
                        )
                    })}
            </div>
            <div class="d-flex justify-content-center"><h1><b>測量儀器</b></h1></div>
            <div class="row pt-3 justify-content-center">
                {measurer.map( mea => {
                        return (
                            <div class="col-sm-3 m-1 ">
                            <h4>{mea.title}</h4>
                            <img class="img-thumbnail" style={style} src={mea.img}></img>
                            <p>{mea.content}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Product;