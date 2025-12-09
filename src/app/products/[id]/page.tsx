'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCart } from '../../context/CartContext'

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
}

export default function ProductDetail() {
  const params = useParams()
  const id = params.id
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!res.ok) throw new Error('Failed to fetch product')
        const data = await res.json()
        setProduct(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (loading) {
    return (
      <div className='container-fluid p-5 d-flex justify-content-center align-items-center' style={{ minHeight: '400px' }}>
     {/* <!-- From Uiverse.io by satyamchaudharydev -->  */}
<div className="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

      </div>
    )
  }

  if (error || !product) {
    return (
      <div className='container-fluid p-5'>
        <div className='alert alert-danger' role='alert'>
          {error || 'Product not found'}
        </div>
        <Link href="/products" className='btn btn-primary'>
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className='container-fluid p-5'>
      <Link href="/products" className='btn btn-secondary mb-4'>
        ← Back to Products
      </Link>

      <div className='row'>
        <div className='col-md-5'>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>

        <div className='col-md-7'>
          <h1>{product.title}</h1>
          
          <div className='my-3'>
            <span className='h3 me-3'>${product.price}</span>
            <span className='badge bg-primary fs-6'>{product.rating.rate}⭐ ({product.rating.count} reviews)</span>
          </div>

          <div className='my-3'>
            <h5>Category</h5>
            <p className='text-capitalize'>{product.category}</p>
          </div>

          <div className='my-4'>
            <h5>Description</h5>
            <p>{product.description}</p>
          </div>

          <div className='my-4'>
            <div className='input-group' style={{ maxWidth: '150px', }}>
              <button className='btn btn-outline-secondary' onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type='number' className='form-control text-center' value={quantity} readOnly />
              <button className='btn btn-outline-secondary' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className='my-4'>
            <button className='btn btn-dark btn-lg me-3' onClick={() => {
              addToCart(product, quantity)
              alert('Product added to cart!')
            }}>Add to Cart</button>
            <button className='btn btn-outline-dark btn-lg'>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}
