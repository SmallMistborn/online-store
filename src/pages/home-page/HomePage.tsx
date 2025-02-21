import React from 'react';
import styles from './homepage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.product_hero__wrapper}>
            <div className={styles.product_hero_img__wrapper}>
                <img
                    src="src/assets/images/living_room_png.png"
                    alt="banner" className="product_hero__img"/>
            </div>
            <div className={styles.product_hero_title__wrapper}>
                <span className={styles.product_hero__title}>Новая коллекция</span>
                <span className={styles.product_hero__text}>Наши новые поставки мебели в<br/>
скандинавском стиле приятно вас удивят
</span>
                <button className={styles.product_hero__button}>Смотреть</button>
            </div>
        </div>
            );
            };

            export default HomePage;