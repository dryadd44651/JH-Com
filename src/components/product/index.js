import React from 'react';

var style = {
    width: "90%",
    height: "50%",
}

export default () => {
    return (
        
        <div class="container pt-30 ">
            <div class="row pt-3 justify-content-center">
                <div class="col-sm-3 m-1">
                <h3>工業應用</h3>
                <h4>Silicon按鍵</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/industry/按鍵.jpg"></img>

                <p>抗老化,耐磨,彈性佳</p>
                </div>
                <div class="col-sm-3 m-1">

                <h3>工業應用</h3>
                <h4>silicon O-Ring</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/industry/o-ring.jpg"></img>
                <p>耐酸鹼,耐溶劑,抗靜電</p>
                </div>
                <div class="col-sm-3 m-1">
                <h3>工業應用</h3>
                <h4>silicon防水圈</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/industry/water-proof.jpg"></img>
                <p>耐酸鹼,耐溶劑,抗靜電</p>
                </div>
            </div>

            <div class="row pt-3 justify-content-center">
                <div class="col-sm-3  m-1">
                <h3>醫療科技</h3>
                <h4>silicon醫療矽膠</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/Medical/silicon.jpg"></img>
                <p>無毒,無味,耐高溫</p>
                </div>
                <div class="col-sm-3  m-1">
                <h3>生活科技</h3>
                <h4>silicon醫療鍵盤</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/life/鍵盤.jpg"></img>
                <p>無毒,無味,防塵</p>
                </div>
                <div class="col-sm-3  m-1">
                <h3>生活科技</h3>
                <h4>silicon果凍套</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/life/3C.jpg"></img>
                <p>延展性佳,防水性佳,質地柔軟</p>
                </div>
            </div>
            <div class="row pt-3 justify-content-center">
                <div class="col-sm-3  m-1">
                <h3>生活科技</h3>
                <h4>silicon水上用品</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/life/水上用品.jpg"></img>
                <p>耐用,舒適,透光性佳</p>
                </div>
                <div class="col-sm-3  m-1">
                <h3>Column 2</h3>
                <h4>silicon..</h4>
                <img class="img-thumbnail" style={style} src="/assets/imgs/communication-3.jpg"></img>
                <p>Lorem ipsum dolor..</p>
                </div>
            </div>
        </div>
    )
}
