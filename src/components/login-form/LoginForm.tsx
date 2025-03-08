import React, {FC, useEffect, useState} from "react";
import styles from "./LoginForm.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {HOME_ROUTE, REGISTER_ROUTE} from "@/utils/constants/RouteNames";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";


const LoginForm: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {login, clearError} = useActions()
    const navigate = useNavigate();
    const {error} = useTypedSelector((state) => state.auth);
    const { isAuth } = useTypedSelector((state) => state.auth);

    useEffect(() => {
        clearError();
    }, []);

    const submitButton = async (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password)
        if(isAuth) {

            navigate(HOME_ROUTE);
        }
    };

    return (
        <div className={styles.loginForm__wrapper}>
        <form onSubmit={submitButton}>
            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

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

            <button className={styles.submitButton} type="submit">
                Войти
            </button>
            <p>Нет аккаунта? <Link to={REGISTER_ROUTE}>Зарегистрироваться</Link></p>
        </form>
        </div>
    );
};

export default LoginForm;