import React from "react";
import Header from "../components/Header";
import HeaderBrand from "../components/HeaderBrand";
import List from '../components/List'

const Katalog = () => {
  return (
    <div className="container">
      <HeaderBrand type="katalog"/>
      <List />
    </div>
  );
};

export default Katalog;
