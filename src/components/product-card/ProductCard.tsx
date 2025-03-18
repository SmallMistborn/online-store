import React from 'react';

const ProductCard = () => {
    let amount = 0;
    return (
        <div>
            <img alt="pic"></img>
            <span>Name product</span>
            <p>Description product</p>
            <p>Выберите цвет:</p>
            <span>Price</span>
            <button>+</button>
            <span>${amount}</span>
            <button>-</button>
        </div>
    );
};

export default ProductCard;