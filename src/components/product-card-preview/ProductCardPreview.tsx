import React, {useEffect, useState} from 'react';
import styles from './ProductCardPreview.module.scss';
interface Furniture {
    id: number;
    title: string;
    image: string;
}

const ProductCardPreview = () => {
    const [furniture, setFurniture] = useState<Furniture[]>([]);

    useEffect(() => {
        fetch("pictures/furniture") // Подключаемся к JSON Server
            .then((response) => response.json())
            .then((data) => setFurniture(data))
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);
    return (
        <div className={styles.card}>
            {furniture.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} style={{ width: "200px" }} />
                </div>
            ))}
        </div>
    );
};

export default ProductCardPreview;