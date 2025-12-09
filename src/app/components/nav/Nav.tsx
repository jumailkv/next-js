"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../../context/CartContext'
import CartModal from '../cart/CartModal'

export default function Nav() {
  const { cartCount } = useCart()
  const [showCart, setShowCart] = useState(false)

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark" style={{minHeight:'5rem'}}>
  <div className="container-fluid">
    <Link className="navbar-brand text-light" href="/"><img src="/logo apple.jpg" alt="" style={{maxHeight:'70px', borderRadius:'20px 20px'}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" href="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" href="/contact">Contact</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-light position-relative ms-3"
            onClick={() => setShowCart(true)}
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <CartModal show={showCart} onClose={() => setShowCart(false)} />
    </div>
  )
}
