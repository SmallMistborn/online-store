import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { CATALOG_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "@/utils/constants/RouteNames";
import { HashLink } from "react-router-hash-link";
import ExitIcon from "@/assets/images/icons/outline_exit.svg?react";
import UserIcon from "@/assets/images/icons/user.svg?react";
import HeartIcon from "@/assets/images/icons/heart.svg?react";
import CartIcon from "@/assets/images/icons/outline_shopping_cart_icon.svg?react";
import { isAuth } from "@/router/routes";

const Navbar: React.FC = () => {
    const [search, setSearch] = useState<string>("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Вы ввели: ${search}`);
    };

    return (
        <nav className={styles.navbar}>
            <form className={styles.navbar__search} onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Поиск"
                    value={search}
                    onChange={handleSearchChange}
                />
            </form>

            <ul className={styles.navbar__list}>
                <li><HashLink smooth to="/catalog#collections">Коллекции</HashLink></li>
                <li><HashLink smooth to="/catalog#furniture">Мебель</HashLink></li>
                <li><HashLink smooth to="/catalog#lights">Освещение</HashLink></li>
                <li><HashLink smooth to="/catalog#accessories">Аксессуары</HashLink></li>
                <li><HashLink smooth to="/catalog#delivery">Доставка</HashLink></li>
            </ul>

            <div className={styles.navbar__right}>
                <span className={styles.navbar__city}>Москва</span>

                <div className={styles.navbar__icons}>
                    <div className={styles.navbar__item}>
                        {isAuth ? (
                            <ExitIcon className={styles.navbar__icon} />
                        ) : (
                            <UserIcon className={styles.navbar__icon} />
                        )}
                    </div>

                    <div className={styles.navbar__item}>
                        <Link to="/catalog">
                            <HeartIcon className={styles.navbar__icon} />
                        </Link>
                    </div>

                    <div className={styles.navbar__item}>
                        <Link to="/cart">
                            <CartIcon className={styles.navbar__icon} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;