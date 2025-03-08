import React from 'react';
import styles from './footer.module.scss';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footer_column}>
                    <ul>
                        <li><h3>О компании</h3></li>
                        <li><Link to="#">Работа и карьера у нас</Link></li>
                        <li><Link to="/contact">Свяжитесь с нами</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/stores">Адреса магазинов</Link></li>
                        <li><Link to="/feedback">Напишите нам</Link></li>
                        <li><Link to="/partners">Сотрудничество с нами</Link></li>
                    </ul>
                </div>

                <div className={styles.footer_column}>
                    <ul>
                        <li><h3>Наши услуги</h3></li>
                        <li><Link to="/delivery">Доставка и самовывоз</Link></li>
                        <li><Link to="/payment">Оплата и кредит</Link></li>
                        <li><Link to="/installments">Оплата частями</Link></li>
                        <li><Link to="/sber">Покупайте со Сбером</Link></li>
                        <li><Link to="/returns">Возврат и обмен</Link></li>
                        <li><Link to="/video-consultations">Видеоконсультации</Link></li>
                        <li><Link to="/services">Все услуги</Link></li>
                    </ul>
                </div>

                <div className={styles.footer_column}>
                    <h3>Мы в социальных сетях</h3>
                    <div className="social-icons" style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
                        <Link to="#" aria-label="Facebook"> </Link>
                        <Link to="#" aria-label="Twitter"><i className="fab fa-twitter"
                                                             style={{fontSize: '24px', color: 'white'}}></i></Link>
                        <Link to="#" aria-label="Instagram"><i className="fab fa-instagram"
                                                               style={{fontSize: '24px', color: 'white'}}></i></Link>
                        <Link to="#" aria-label="YouTube"><i className="fab fa-youtube"
                                                             style={{fontSize: '24px', color: 'white'}}></i></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;