
'use client';

import Image from "next/image";

export default function OurSignatureDishes() {
  return (
    <section className="signature-dishes">
      <div className="signature-dishes-header">
        <h2>Our Signature Dishes</h2>
        <p>
          From classic favorites to modern culinary creations, our menu is
          designed to tantalize your taste buds. Every dish is made with the
          freshest ingredients and an extra dash of love.
        </p>
      </div>

      <div className="signature-dishes-grid">

        {/* Burger Card */}
        <div className="signature-dish-card signature-burger-card">
          <div className="signature-dish-image">
            <Image
              src="/assets/burger.jpg"
              alt="Cheese Burger"
              fill
              className="signature-food-img"
              priority
            />
            <button className="signature-cart-icon">🛒</button>
          </div>

          <div className="signature-dish-body">
            <div className="signature-dish-title">
              <h3>Cheese Burger</h3>
              <span>$120</span>
            </div>

            <p>
              Crispy chicken fillet with cheese, thousand island sauce,
              iceberg lettuce, tomato, onion & pickles.
            </p>
          </div>

          <div className="signature-dish-footer">
            <button className="signature-order-btn signature-orange-btn">
              Order Now <span>🛒</span>
            </button>
          </div>
        </div>

        {/* Pizza Card */}
        <div className="signature-dish-card signature-pizza-card">
          <div className="signature-dish-image">
            <Image
              src="/assets/pizza.jpg"
              alt="Wrap Pizza"
              fill
              className="signature-food-img"
            />
            <button className="signature-cart-icon">🛒</button>
          </div>

          <div className="signature-dish-body">
            <div className="signature-dish-title">
              <h3>Wrap Pizza</h3>
              <span>$15.40</span>
            </div>

            <p>
              Crispy chicken with garlic sauce, tomato, lettuce, onion &
              cheese in a soft, toasted tortilla wrap.
            </p>
          </div>

          <div className="signature-dish-footer">
            <button className="signature-order-btn signature-purple-btn">
              Order Now <span>🛒</span>
            </button>
          </div>
        </div>

        {/* Subway Card */}
        <div className="signature-dish-card signature-subway-card">
          <div className="signature-dish-image">
            <Image
              src="/assets/subway.jpg"
              alt="Naga Subway"
              fill
              className="signature-food-img"
            />
            <button className="signature-cart-icon">🛒</button>
          </div>

          <div className="signature-dish-body">
            <div className="signature-dish-title">
              <h3>Naga Subway</h3>
              <span>$10.16</span>
            </div>

            <p>
              Spicy & crispy fried chicken wings coated in a flavorful blend
              of naga chili & sauce.
            </p>
          </div>

          <div className="signature-dish-footer">
            <button className="signature-order-btn signature-green-btn">
              Order Now <span>🛒</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
