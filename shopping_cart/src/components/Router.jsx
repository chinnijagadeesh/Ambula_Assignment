import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';

const Router = () => {

  const [data,setData] = useState([]);
  const [cart,setCart] = useState([]);
  const [title,setTitle] = useState('Hurry Up! Shop Now')
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res => setData(res) )
  },[]);

  const handleProduct = (product)=>{
    const productExist = cart.find((item)=> item.id === product.id);
if(productExist)
  {
    setCart(
      cart.map((item)=>
      item.id === product.id 
      ?{...productExist, quantity:productExist.quantity+1}:item));
      alert('Yup ! Thank You For Purchase Same Product Again')

    }
      else
      {
        setCart([...cart,{...product, quantity:1}]);
        alert('Item Added To The Cart')

      }
  }


    const handleDel = (product)=>{
      const productExist = cart.find((item)=> item.id === product.id);
      if(productExist.quantity===1)
      {
        setCart(cart.filter((item)=>item.id !== product.id));
      }
      else
      {
        setCart(cart.map((item)=>item.id === product.id ? {...productExist,quantity:productExist.quantity-1} : item))
      }
    }

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route index element={<Home data={data} title={title} handleProduct={ handleProduct} />} />
          <Route path="cart" element={<Cart handleDel={handleDel} handleProduct={handleProduct} cart={cart} />} />
          <Route path="*" element={<h1>No Page Found</h1>} />
      </Routes>
      </BrowserRouter>
  )
}

export default Router