import React, {FC, useEffect, useState} from 'react';
import styles from "./RegisterForm.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE} from "@/utils/constants/RouteNames";
import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/useTypedSelector";

const RegisterForm:FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate();
    const { register, clearError } = useActions();
    const { isAuth } = useTypedSelector((state) => state.auth);
    const {error} = useTypedSelector((state) => state.auth);

    useEffect(() => {
        clearError();
    }, []);


    const submitButton = async (e: React.FormEvent) => {
        e.preventDefault();
        register(username, password, confirmPassword);


        if (isAuth) {
            navigate(HOME_ROUTE);
        }
    };

    return (
        <div className={styles.registerForm__wrapper}>
            <form onSubmit={submitButton}>
                {error && <div style={{color: "red", marginBottom: "10px"}}>{error}</div>}

                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Повторите пароль:</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>


                <button className={styles.submitButton} type="submit">
                    Зарегистрироваться
                </button>
                <p>Уже зарегистрированы? <Link to={LOGIN_ROUTE}>Войти</Link></p>
            </form>
        </div>
            );
            };

            export default RegisterForm;