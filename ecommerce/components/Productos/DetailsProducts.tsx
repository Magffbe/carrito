'use client'
import { useContextCarrito } from '@/Context/ProviderProducto'
import React, { useEffect } from 'react'
import ProductList from './ProductList'

export default function DetailsProducts() {

    const {producto, setProductos } = useContextCarrito()

    async function cargarProductos(){
        try {

            const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productos`)
            const data = await res.json();
            
            setProductos(data)

        } catch (error) {
            console.log("Ocurrio un error al cargar los productos", error)
            
        }
    }

    useEffect(() =>{
       cargarProductos();
    }, [])




  return (
    <div>
      
    <ProductList/>

    </div>
  );

}
