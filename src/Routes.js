import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './components/home/';
import Services from './components/services/';
import Equipments from './components/services/equipment';
import Measurers from './components/services/measurer';
import Contact from './components/contact/';
import Products from './components/product/';
import SingleProduct from './components/product/single';
import About from './components/about';
import NotFound from './components/404';

//exact: using in parent route "/" "product"
const equipment = [
    {id:0,title: 'IR輸送式乾燥機', img:'/assets/imgs/equipment/1.jpg',content:'XXX...'},
    {id:1, title: 'LSR射出機', img:'/assets/imgs/equipment/2.jpg',content:'XXX...'},
    {id:2, title: '固態真空油壓機', img:'/assets/imgs/equipment/3.jpg',content:'XXX...'},
    {id:3, title: '裁切機', img:'/assets/imgs/equipment/4.jpg',content:'XXX...'},
    {id:4, title: '印刷台', img:'/assets/imgs/equipment/5.jpg',content:'XXX...'},
    {id:5, title: '中型平面網印機', img:'/assets/imgs/equipment/6.jpg',content:'XXX...'},
    {id:6, title: '電動跑檯式退料網印機', img:'/assets/imgs/equipment/7.jpg',content:'XXX...'},
    {id:7, title: '混料機', img:'/assets/imgs/equipment/8.jpg',content:'XXX...'},
    {id:8, title: '烤箱', img:'/assets/imgs/equipment/9.jpg',content:'XXX...'},
]
const measurer = [
    {id:0, title: '手動荷重計', img:'/assets/imgs/measurer/1.jpg',content:'XXX...'},
    {id:1, title: '2.5D量測儀', img:'/assets/imgs/measurer/2.jpg',content:'XXX...'},
    {id:2, title: '壽命測試機', img:'/assets/imgs/measurer/3.jpg',content:'XXX...'},
    {id:3, title: '荷重曲線量測儀器', img:'/assets/imgs/measurer/4.jpg',content:'XXX...'},
    {id:4, title: '放大檢視鏡', img:'/assets/imgs/measurer/5.jpg',content:'XXX...'},
    {id:5, title: '耐摩擦試驗機', img:'/assets/imgs/measurer/6.jpg',content:'XXX...'},
    {id:6, title: '游標卡尺', img:'/assets/imgs/measurer/7.jpg',content:'XXX...'},
    {id:7, title: '硬度計', img:'/assets/imgs/measurer/8.jpg',content:'XXX...'},
    {id:8, title: '厚薄規', img:'/assets/imgs/measurer/9.jpg',content:'XXX...'},
    {id:9, title: '厚薄規', img:'/assets/imgs/measurer/10.jpg',content:'XXX...'},
    
]

const products = [
    {id:0, title: '工業應用', sub:'Silicon按鍵',img:'/assets/imgs/industry/按鍵.jpg',content:'抗老化,耐磨,彈性佳'},
    {id:1, title: '工業應用', sub:'silicon O-Ring',img:'/assets/imgs/industry/o-ring.jpg',content:'耐酸鹼,耐溶劑,抗靜電'},
    {id:2, title: '工業應用', sub:'silicon防水圈',img:'/assets/imgs/industry/water-proof.jpg',content:'耐酸鹼,耐溶劑,抗靜電'},
    {id:3, title: '醫療科技', sub:'silicon醫療矽膠',img:'/assets/imgs/Medical/silicon.jpg',content:'無毒,無味,耐高溫'},
    {id:4, title: '生活科技', sub:'silicon醫療鍵盤',img:'/assets/imgs/life/鍵盤.jpg',content:'無毒,無味,防塵'},
    {id:5, title: '生活科技', sub:'silicon果凍套',img:'/assets/imgs/life/3C.jpg',content:'延展性佳,防水性佳,質地柔軟'},
    {id:6, title: '生活科技', sub:'silicon水上用品',img:'/assets/imgs/life/水上用品.jpg',content:'耐用,舒適,透光性佳'},

]

const Equipment = (props) => {
    let id = props.match.params.id;
    return <Equipments equipment={equipment[id]} />
}
const Measurer = (props) => {
    let id = props.match.params.id;
    return <Measurers measurer={measurer[id]} />
}
const Product = (props) => {
    let id = props.match.params.id;
    return <SingleProduct product={products[id]} />
}
export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={() =><Services equipment={equipment} measurer={measurer} />} />
        <Route path="/services/equipment/:id" component={ Equipment} />
        <Route path="/services/measurer/:id" component={ Measurer} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/product" component={() => <Products products={products} />} />
        <Route path="/product/industry" component={() => <Products products={[products[0],products[1],products[2]]} />} />
        <Route path="/product/medical" component={() => <Products products={[products[3]]} />} />
        <Route path="/product/life" component={() => <Products products={[products[4],products[5],products[6]]} />} />
        <Route exact path="/product/:id" component={Product} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
    </Switch>
);
