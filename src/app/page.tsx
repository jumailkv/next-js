"use client";

import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleIndicators");
    if (carouselElement) {
      new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 3000,
        wrap: true,
      });
    }
  }, []);

  return (
    <div className="container-fluid p-5" style={{backgroundColor:"beige"}}>

      {/*  CAROUSEL */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></button>
        </div>

        <div className="carousel-inner rounded-5">
          <div className="carousel-item active">
            <img src="/caroo1.jpg" className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src="/caroo2.jpg" className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src="/caroo3.jpg" className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src="/caroo4.jpg" className="d-block w-100" alt="Banner 4" />
          </div>
          <div className="carousel-item">
            <img src="/caroo5.jpg" className="d-block w-100" alt="Banner 5" />
          </div>
          
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/*  PRODUCT CARDS  */}
      <h2 className="mb-4 fw-bold">Featured Products</h2>

      <div className="product-grid">

        {/* Product 1 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/shoe1.jpg" alt="Running Shoe" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Running Shoes</div>
            <h2 className="product-title">574 Running shoe For Men  </h2>

            <div className="product-description">
              <p>Allow your pair of shoes to air and de-odorize at a regular basis</p>
            </div>

            <div className="product-features">
              <span className="feature">Synthetic Rubber</span>
              <span className="feature">Flat</span>
              <span className="feature">Mesh</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$1,299</span>
                <span className="price-now">$1,099</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

           
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/watch2.jpg" alt="Premium Watch 2" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Luxury Timepiece</div>
            <h2 className="product-title">Rolex Deepsea</h2>

            <div className="product-description">
              <p>Precision engineering meets timeless design.</p>
            </div>

            <div className="product-features">
              <span className="feature">Water Resistant</span>
              <span className="feature">5-Year Warranty</span>
              <span className="feature">Swiss Made</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$1,299</span>
                <span className="price-now">$899</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

           
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="sunglass3.jpg" alt="Sunglass" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Sunglass</div>
            <h2 className="product-title">SAM AND MARSHALL SAIHA Sunglass</h2>

            <div className="product-description">
              <p>400% UV Protection I Unisex</p>
            </div>

            <div className="product-features">
              <span className="feature">Metal</span>
              <span className="feature">100% UV protect</span>
              <span className="feature">31 g</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$1,799</span>
                <span className="price-now">$979</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/trolley4.webp" alt="Trolley bags" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Bags & Luggage</div>
            <h2 className="product-title">Medium Check-in Suitcase (65 cm) 8 Wheels - Arrow Hard-sided Polypropylene</h2>

            <div className="product-description">
              <p>Ultra-light, ultra strong shells withstand travel rigors.</p>
            </div>

            <div className="product-features">
              <span className="feature">4 kg 310 g</span>
              <span className="feature">Made in India</span>
              <span className="feature">Durable</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$17,299</span>
                <span className="price-now">$15,599</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

           
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/beauty5.jpg" alt="Beauty" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Skin Care</div>
            <h2 className="product-title">𝐌𝐚𝐤𝐞- 𝐮𝐩 & 𝐏𝐞𝐫𝐟𝐮𝐦𝐞</h2>

            <div className="product-description">
              <p>Ceramides & Hyaluronic Hydrating Face Cream</p>
            </div>

            <div className="product-features">
              <span className="feature">Non Comedogenic</span>
              <span className="feature">100g</span>
              <span className="feature">Ceramides, Japanese Rice Water</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$395</span>
                <span className="price-now">$336</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

           
          </div>
        </div>

        {/* Product 6 — WHITESPACE FIXED HERE */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-6.jpg" alt="Fragrance" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Fragrance</div>
            <h2 className="product-title">Nautica Voyage</h2>

            <div className="product-description">
              <p>Eau de toilette perfect for daily wear.</p>
            </div>

            <div className="product-features">
              <span className="feature">Liquid</span>
              <span className="feature">100 Millilitres</span>
              <span className="feature">Fresh, Aquatic, Fougere</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$3,999</span>
                <span className="price-now">$1,794</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

          </div>
        </div>

        {/* Product 7 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/shoe7.webp" alt="Sneakers" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Sneakers</div>
            <h2 className="product-title">Puma</h2>

            <div className="product-description">
              <p>Comfortable stylish all-day sneakers.</p>
            </div>

            <div className="product-features">
              <span className="feature">Not Water Resistant</span>
              <span className="feature">Rubber</span>
              <span className="feature">Lace-Up</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$5,999</span>
                <span className="price-now">$2,760</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            
          </div>
        </div>

        {/* Product 8 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/bag8.webp" alt="Bags" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Premium Bags</div>
            <h2 className="product-title">adidas Bag</h2>

            <div className="product-description">
              <p>Medium 22 L Laptop Backpack Ess Bp Classic  (Black).</p>
            </div>

            <div className="product-features">
              <span className="feature">Dimensions: 53 cm x 28 cm x 28</span>
              <span className="feature">1-Year Warranty</span>
              <span className="feature">Laptop Compatibility: No</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$2,399</span>
                <span className="price-now">$899</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

         
          </div>
        </div>

      </div>
    </div>
  );
}
