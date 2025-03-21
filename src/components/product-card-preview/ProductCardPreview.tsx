import React, { useEffect, useState } from 'react';
import styles from './ProductCardPreview.module.scss';
import HeartIcon from "@/assets/images/icons/card__heart__icon.svg?react";
import { IProduct } from "@/models/IProduct";
import { useDispatch, useSelector } from "react-redux";
import { CartActionCreators } from "@/store/reducers/cart/action-creators";
import {AppDispatch, RootState} from "@/store";

const ProductCardPreview = () => {
    const [furniture, setFurniture] = useState<IProduct[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.cart.user);
    const cartProducts = useSelector((state: RootState) => state.cart.products);

    useEffect(() => {
        // fetch("http://localhost:4000/api/furniture")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log("Загруженные данные:", data);
        //         setFurniture(data);
        //     })
        //     .catch((error) => console.error("Ошибка загрузки данных:", error));
        fetch('/api/data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                return response.json(); // Парсим JSON из ответа
            })
            .then((data) => {
                console.log('Данные:', data); // Обрабатываем данные
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error); // Обрабатываем ошибку
            });
    }, []);


    const addToCart = (item: IProduct) => {
        if (!user) {
            alert("Пожалуйста, войдите в систему, чтобы добавить товар в корзину.");
            return;
        }
        const cartItem = {
            product: item,
            quantity: 1,
        };
        console.log("Добавляемый товар:", cartItem);
        dispatch(CartActionCreators.addItemToCart(cartItem));
    };

    const increaseQuantity = (productId: number) => {
        dispatch(CartActionCreators.increaseQuantity(productId));
    };

    const decreaseQuantity = (productId: number) => {
        dispatch(CartActionCreators.decreaseQuantity(productId));
    };

    return (
        <div className={styles.card}>
            {furniture.map((item) => {
                const cartItem = cartProducts[item.id];
                const quantity = cartItem ? cartItem.quantity : 0;

                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} style={{ width: "200px" }} />
                        <p>${item.price}</p>
                        <div className={styles.card__product_actions}>
                            {quantity > 0 ? (
                                <div className={styles.card__quantity_control}>
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                            ) : (
                                <button className={styles.card__button__add_to_cart} onClick={() => addToCart(item)}>
                                    В корзину
                                </button>
                            )}
                            <HeartIcon />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductCardPreview;
