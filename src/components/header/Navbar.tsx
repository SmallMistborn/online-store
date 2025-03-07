import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {CART_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE} from "@/utils/constants/RouteNames";
import { HashLink } from "react-router-hash-link";
import ExitIcon from "@/assets/images/icons/outline_exit.svg?react";
import UserIcon from "@/assets/images/icons/user.svg?react";
import HeartIcon from "@/assets/images/icons/heart.svg?react";
import CartIcon from "@/assets/images/icons/outline_shopping_cart_icon.svg?react";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";


const Navbar: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const navigate = useNavigate();
    const { isAuth, user } = useTypedSelector((state) => state.auth);
    const { login, logout } = useActions();


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Вы ввели: ${search}`);
    };

    const handleLoginButton = () =>{
        navigate(LOGIN_ROUTE);
    }

    const handleLogoutButton = () =>{
        logout();
        navigate(LOGIN_ROUTE);
    }

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
                            <ExitIcon className={styles.navbar__icon} onClick={handleLogoutButton} />

                        ) : (
                            <UserIcon className={styles.navbar__icon} onClick={handleLoginButton}/>
                        )}
                    </div>

                    <div className={styles.navbar__item}>
                        <Link to={CATALOG_ROUTE}>
                            <HeartIcon className={styles.navbar__icon} />
                        </Link>
                    </div>

                    <div className={styles.navbar__item}>
                        <Link to={CART_ROUTE}>
                            <CartIcon className={styles.navbar__icon} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;