import React, { useEffect, useState } from 'react';
import styles from './ProductCardPreview.module.scss';
import HeartIcon from "@/assets/images/icons/card__heart__icon.svg?react";
import { IProduct } from "@/models/IProduct";
import {useDispatch, useSelector} from "react-redux";
import { CartActionCreators } from "@/store/reducers/cart/action-creators";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { CartState } from "@/store/reducers/cart/types";
import {RootState} from "@/store";

const ProductCardPreview = () => {
    const [furniture, setFurniture] = useState<IProduct[]>([]);
    const dispatch = useDispatch<ThunkDispatch<CartState, unknown, AnyAction>>();

    const user = useSelector((state: RootState) => state.cart.user);
    useEffect(() => {
        fetch("http://localhost:3000/api/furniture")
            .then((response) => response.json())

            .then((data) =>{
                console.log("Загруженные данные:", data);
                setFurniture(data);})
            .catch((error) => console.error("Ошибка загрузки данных:", error));
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

    return (
        <div className={styles.card}>
            {furniture.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} style={{ width: "200px" }} />
                    <p>${item.price}</p>
                    <div className={styles.card__product_actions}>
                        <button
                            className={styles.card__button__add_to_cart}
                            onClick={() => addToCart(item)}
                        >
                            В корзину
                        </button>
                        <HeartIcon />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCardPreview;