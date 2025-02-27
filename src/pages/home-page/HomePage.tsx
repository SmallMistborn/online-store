import React, { useState } from 'react';
import styles from './homepage.module.scss';
import ProductCardPreview from "@/components/product-card-preview/ProductCardPreview";

const HomePage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Вы подписались с email: ${email}`);
    };

    return (
        <div>
            <div className={styles.product_hero__wrapper}>
                <div className={styles.product_hero_img__wrapper}>
                    <img
                        src="src/assets/images/living_room_png.png"
                        alt="banner"
                        className="product_hero__img"
                    />
                </div>
                <div className={styles.product_hero_title__wrapper}>
                    <span className={styles.product_hero__title}>Новая коллекция</span>
                    <span className={styles.product_hero__text}>
                    Наши новые поставки мебели в<br />
                    скандинавском стиле приятно вас удивят
                </span>
                    <button className={styles.product_hero__button}>Смотреть</button>
                </div>
            </div>

            <ProductCardPreview />


            <div className={styles.newsletter}>
                <div className={styles.newsletter__wrapper}>
                    <p className={styles.newsletter__description}>
                        Подпишитесь на нашу новостную <br/>
                        рассылку и получите скидку 10% на <br/>
                        первую покупку!
                    </p>
                    <form className={styles.newsletter__form} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Введите ваш e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.newsletter__input}
                        />
                        <button type="submit" className={styles.newsletter__button}>Подписаться</button>
                    </form>
                </div>
                </div>
            </div>
            );
            };

            export default HomePage;