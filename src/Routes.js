import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './components/home/';
import Services from './components/services/';
import Contact from './components/contact/';
import Product from './components/product/';
import About from './components/about';
import NotFound from './components/404';

//exact: using in parent route "/" "product"

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/product" component={() => <Product selected={[0,1,2,3,4,5,6]} />} />
        <Route path="/product/industry" component={() => <Product selected={[0,1,2]} />} />
        <Route path="/product/medical" component={() => <Product selected={[3]} />} />
        <Route path="/product/life" component={() => <Product selected={[4,5,6]} />} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
    </Switch>
);
