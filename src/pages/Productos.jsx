import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';
//import { ProductoIndividual } from './ProductoIndividual';
//import '../css/productos.css'

export const Productos = () => {
  const [products, setproduct] = useState([]);
  const getProducts = async () => {
    const productos = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item');
    setproduct(productos.data);
  };

{/*}
  const [product, setoneproduct] = useState([]);
  const getOneproduct = async()=>{
    const unproducto = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/5fbc19a65a3f794d72471163');
  };
  setoneproduct(unproducto.data);
*/}
  useEffect(() => {
    //getOneproduct();
    getProducts();
  }, []);
  return (
    <div className='fondo'>
      {products.map((elemento) => (
        <>
          <div>
            <h2>{elemento.product_name}</h2>
            <div className='elemento'>
              <img src={elemento.image} alt="" />
              <p className='precio'>{elemento.price}</p>
               {/*
                <button onClick={() => product.map((elementoUnico)=>(
                {/*<Link to={ProductoIndividual} >

                </Link>}
              ))}>Ver más</button>*/}
              
            </div>
          </div>

        </>

      ))}

    </div>
  )
}
