'use client'
import { useContextCarrito } from '@/Context/ProviderProducto'
import Link from 'next/link'
import React from 'react'

export default function Nav() {

const {productoCarrito} = useContextCarrito();

    return (
    <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ecommerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/carrito">
          <button type="button" className="btn btn-primary">
        Carrito<span className="badge text-bg-secondary">{productoCarrito.length}</span>
        </button>
          </Link>
        </li>
        <li className="nav-item" >
          <Link  className="nav-link" href="/producto">Productos</Link>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</nav>

    )
}
