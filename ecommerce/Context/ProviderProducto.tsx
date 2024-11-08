'use client'
import { Producto } from '@/Modelos/Producto';
import React, { ReactNode, useContext, useState } from 'react'
import { createContext } from 'react';

interface VistaComponente{
    children: ReactNode;
}

export const contextProducto = createContext({
  producto: [] as Producto[],
  setProductos: (producto: Producto[]) => {},
  productoCarrito: [] as Producto[],
  setProductoCarrito: (producto: Producto[]) => {},
  addToCart: (producto: Producto) : void => {},
  removeFromCart: (productId: number): void  => {},
  getTotalCarrito: (): number => 0
  
});

export default function ProviderProducto({children}:VistaComponente) {

    const [producto, setProductos] = useState<Producto[]>([]);
    const [productoCarrito, setProductoCarrito] = useState<Producto[]>([]);

    const addToCart = (producto: Producto) => {
      const productoConTotal = {
          ...producto,
          TotalPrecio: parseFloat(producto.PrecioProducto) + parseFloat(producto.IsvProducto),  
      };

      setProductoCarrito((prevCarrito) =>[...prevCarrito, productoConTotal]);
  };
    
    const removeFromCart = (productId: number) => {
      setProductoCarrito((prevCarrito) => prevCarrito.filter((p) => p.IdProducto !== productId)); 
    };

    const getTotalCarrito = () => {
      return productoCarrito.reduce((total, producto) => {
        const precio = parseFloat(producto.PrecioProducto) || 0;
        const isv = parseFloat(producto.IsvProducto) || 0;     
    
        return total + precio + isv;  
      }, 0);
    };

    

  return (
  
  
<contextProducto.Provider value={{producto, setProductos, productoCarrito, setProductoCarrito, addToCart, removeFromCart, getTotalCarrito}}>
    {children}
</contextProducto.Provider>

  );
}

export function useContextCarrito (){
    return useContext(contextProducto)

}