import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store"; // Используем RootState, а не CartState
import { ICartItem } from "@/models/ICart";

const Cart = () => {
    // Получаем корзину из Redux-хранилища
    const cart = useSelector((state: RootState) => state.cart.products);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    // Проверка на пустую корзину
    if (!cart || Object.keys(cart).length === 0) {
        return (
            <div>
                <h2>🛒 Ваша корзина</h2>
                <p>Корзина пуста</p>
            </div>
        );
    }

    return (
        <div>
            <h2>🛒 Ваша корзина</h2>
            <ul>
                {Object.values(cart).map((cartItem: ICartItem) => (
                    <li key={cartItem.product.id}>
                        <img
                            src={cartItem.product.image}
                            alt={cartItem.product.name}
                            style={{ width: "50px", marginRight: "10px" }}
                        />
                        <span>{cartItem.product.name}</span> - {cartItem.quantity} шт.
                        <span> (${cartItem.product.price * cartItem.quantity})</span>
                    </li>
                ))}
            </ul>
            <div>
                <p><b>Общее количество товаров:</b> {totalQuantity}</p>
                <p><b>Общая сумма:</b> ${totalPrice}</p>
            </div>
        </div>
    );
};

export default Cart;

