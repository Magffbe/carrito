'use client'
import { useContextCarrito } from '@/Context/ProviderProducto'
import React from 'react'

export default function ProductList() {

    const { producto, addToCart } = useContextCarrito();



    return (
        <div className="container">
           <div className="row">
                {producto.map((producto) => (
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
                                    onClick={() => addToCart(producto)} 
                                >
                                Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        

        

    );

}
    




