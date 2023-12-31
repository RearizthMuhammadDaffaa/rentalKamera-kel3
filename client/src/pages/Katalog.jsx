import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeaderBrand from "../components/HeaderBrand";
import List from '../components/List'
import axios from "axios";

const Katalog = () => {
  const [data,setData] = useState([]);
  // const [merk,setMerk] = useState([])

  // const getDataMerk = async ()=>{
  //   const response = await axios.get('http://localhost:5000/merk')
  //   setMerk(response.data)
  // }
  const getData = async ()=>{
    const response = await axios.get('http://localhost:5000/kamera')
    setData(response.data)
    
  }
  useEffect(()=>{  
    getData()
    
  },[])
  return (
    <div className="container">
      <HeaderBrand type="katalog"/>
      {data.map((item)=>(
          <List kamera={item} key={item.id}/>
      ))}
      
    </div>
  );
};

export default Katalog;
