"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    alert("Product added to cart!");
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div
        className="border rounded-4 p-3 bg-white h-100"
        style={{
          transition: "0.25s",
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",    
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-6px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <Link
          href={`/products/${product.id}`}
          className="text-decoration-none text-dark"
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-100 mb-3"
            style={{
              height: "200px",
              objectFit: "contain",
            }}
          />

          {/* Title */}
          <h6 className="fw-semibold">{product.title}</h6>

          {/* Description */}
          <p className="text-muted" style={{ fontSize: "14px" }}>
            {product.description.substring(0, 90)}...
          </p>

          {/* Price + Rating */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">${product.price}</h5>

            <span
              className="px-2 py-1 rounded-pill d-flex align-items-center gap-1"
              style={{
                background: "#e7f1ff",
                fontSize: "12px",
                color: "#007bff",
                fontWeight: "600",
              }}
            >
              {product.rating.rate}
              <span style={{ color: "#f1c40f" }}>⭐</span>
            </span>
          </div>
        </Link>

        {/* Buttons */}
        <div className="d-grid gap-2 mt-auto">
          <Link href={`/products/${product.id}`} className="btn btn-dark">
            View Details
          </Link>

          <button
            className="btn btn-outline-dark"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
