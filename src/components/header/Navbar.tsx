import React, {useState} from 'react';
import styles from './Navbar.module.scss';
import {Link, NavLink} from "react-router-dom";
import {CATALOG_ROUTE, HOME_ROUTE} from "@/utils/constants/RouteNames";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Вы ввели: ${search}`);
    };
    return (
        <div className={styles.navbar}>
        <nav>
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
            <ul>
                <span>Москва</span>
                <li className="navbar__item">
                    <Link to={HOME_ROUTE}>
                        <img src="src/assets/images/icons/user.svg" alt="profile icon" className="navbar__icon"/>
                    </Link>
                </li>

                <li className="navbar__item">
                    <Link to="/catalog">
                        <img src="src/assets/images/icons/heart.svg" alt="favorite list" className="navbar__icon"/>
                    </Link>
                </li>

                <li className="navbar__item">
                    <Link to="/cart">
                        <img src="src/assets/images/icons/outline_shopping_cart_icon.svg" alt="Cart" className="navbar__icon"/>
                    </Link>
                </li>

            </ul>
        </nav>
        </div>
    )
        ;
};

export default Navbar;