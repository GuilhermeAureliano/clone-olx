import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import { Template } from "./MainComponents";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

const Page = (props) => {
  return (
    <BrowserRouter>
      {/* Componentes padrões do sistema como um todo */}
      
      <Template>
        {/* Componentes parciais. */}
        <Header />

        <Routes />

        <Footer />
      </Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);