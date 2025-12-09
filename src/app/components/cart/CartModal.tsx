'use client'

import React from 'react'
import { useCart } from '../../context/CartContext'

interface CartModalProps {
  show: boolean
  onClose: () => void
}

export default function CartModal({ show, onClose }: CartModalProps) {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!show) return null

  return (
    <div className='modal d-block' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Apple Cart</h5>
            <button
              type='button'
              className='btn-close'
              onClick={onClose}
            ></button>
          </div>
          <div className='modal-body'>
            {cart.length === 0 ? (
              <p className='text-center'>Your cart is empty</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} className='d-flex gap-3 mb-3 border-bottom pb-3'>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'contain',
                      }}
                    />
                    <div className='flex-grow-1'>
                      <h6>{item.title}</h6>
                      <p className='text-muted mb-2'>${item.price}</p>
                      <div className='input-group' style={{ maxWidth: '120px' }}>
                        <button
                          className='btn btn-outline-secondary'
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type='number'
                          className='form-control text-center'
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className='btn btn-outline-secondary'
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='text-end'>
                      <p className='mb-3 fw-bold'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        className='btn btn-sm btn-danger'
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <div className='modal-footer'>
              <div className='w-100'>
                <div className='d-flex justify-content-between mb-3'>
                  <h5>Total:</h5>
                  <h5>${total.toFixed(2)}</h5>
                </div>
                <button className='btn btn-dark w-100'>Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
