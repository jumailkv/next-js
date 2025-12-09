'use client'

import React, { useState, useEffect } from 'react'
import ProductCard from '../components/productCard/ProductCard'
import ProductSkeleton from '../components/skeleton/ProductSkeleton'   

export default function Products() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        setProducts(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // ===================== Skeleton Loading Section =====================
  if (loading) {
    return (
      <div className="container-fluid p-5">
        <div className="row g-4">
          {[...Array(8)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  // ====================================================================

  if (error) {
    return (
      <div className='container-fluid p-5'>
        <div className='alert alert-danger' role='alert'>
          Error: {error}
        </div>
      </div>
    )
  }

  return (
    <div className='container-fluid p-5'>
      {/* ================search bar================ */}
      <div className="mb-5 w-50" >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control p-3 shadow-lg"
        />
      </div>
      {/* ================search bar close================ */}

      <h1 className='mb-5'>Our Products</h1>

      <div className='row g-4'>
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
