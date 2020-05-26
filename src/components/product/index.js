import React from 'react';

var style = {
    width: "90%",
    height: "50%",
}

function Product(props){
    const items = [
        {title: '工業應用', sub:'Silicon按鍵',img:'/assets/imgs/industry/按鍵.jpg',content:'抗老化,耐磨,彈性佳'},
        {title: '工業應用', sub:'silicon O-Ring',img:'/assets/imgs/industry/o-ring.jpg',content:'耐酸鹼,耐溶劑,抗靜電'},
        {title: '工業應用', sub:'silicon防水圈',img:'/assets/imgs/industry/water-proof.jpg',content:'耐酸鹼,耐溶劑,抗靜電'},
        {title: '醫療科技', sub:'silicon醫療矽膠',img:'/assets/imgs/Medical/silicon.jpg',content:'>無毒,無味,耐高溫'},
        {title: '生活科技', sub:'silicon醫療鍵盤',img:'/assets/imgs/life/鍵盤.jpg',content:'無毒,無味,防塵'},
        {title: '生活科技', sub:'silicon果凍套',img:'/assets/imgs/life/3C.jpg',content:'延展性佳,防水性佳,質地柔軟'},
        {title: '生活科技', sub:'silicon水上用品',img:'/assets/imgs/life/水上用品.jpg',content:'耐用,舒適,透光性佳'},

    ]
    

    return (
        
        <div class="container pt-30 ">
            
            <div class="row pt-3 justify-content-center">
                {
                    props.selected.map( idx => {
                        return (
                            <div class="col-sm-3 m-1 ">
                            <h3>{items[idx].title}</h3>
                            <h4>{items[idx].sub}</h4>
                            <img class="img-thumbnail" style={style} src={items[idx].img}></img>
                            <p>{items[idx].content}</p>
                            </div>
                        )
                    })
                }
                
 
            </div>
        </div>
    )
}

export default Product;