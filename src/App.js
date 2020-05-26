import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Navbar from './components/navbar/';
import Footer from './components/footer/';
import Layout from './components/Layout';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
