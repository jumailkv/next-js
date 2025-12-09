import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4" style={{ marginTop: 'auto', width: '100%' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h5>APPLE</h5>
            <p>Your trusted online shopping destination</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link href="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link href="/contact" className="text-light text-decoration-none">Contact</Link></li>
               <li><Link href="/about" className="text-light text-decoration-none">About</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@Apple.com</p>
            <p>Phone: +1-5534-2637-5000</p>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p>&copy; 2025 APPPLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
