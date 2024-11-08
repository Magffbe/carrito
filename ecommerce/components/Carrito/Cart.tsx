'use client'
import { useContextCarrito } from '@/Context/ProviderProducto'
import { Producto } from '@/Modelos/Producto';
import React from 'react'

export default function Cart() {

const {productoCarrito, getTotalCarrito, removeFromCart} = useContextCarrito();
  return (
    <div className="container">
        <div className="row">
            {productoCarrito.map((producto) => (
                <div key={producto.IdProducto} className="col-md-3 mb-3 d-flex">
                    <div className="card h-100 d-flex flex-column">
                            <img 
                                src={producto.imagenProducto} 
                                className="card-img-top" 
                                alt={producto.NombreProducto} 
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{producto.NombreProducto}</h5>
                                <p className="card-text">Precio: L{producto.PrecioProducto}</p>
                                <p className="card-text">ISV: L{producto.IsvProducto}</p>
                                <div className="mt-auto">
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => removeFromCart(producto.IdProducto)} 
                                >
                                Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="row mt-4">
            <div className="col text-end">
            <h4 className="card-title">Total del carrito: L{getTotalCarrito()}</h4>

            </div>
            </div>
        </div>

    );

}
    