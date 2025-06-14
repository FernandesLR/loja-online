import React from 'react';
import './card.css';

const Card = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.nome}
          className="product-image"
        />
      </div>

      <div className="product-details">
        <p className="product-category">{product.descricao}</p>
        <h3 className="product-name">{product.nome}</h3>
        <div className="product-price-wrapper">
          <span className="product-price">${product.preco}</span>
          {product && (
            <span className="product-original-price">
              ${product.preco}
            </span>
          )}
        </div>
        <button className="add-to-cart-button">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default Card;
