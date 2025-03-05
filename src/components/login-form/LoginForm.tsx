import React, { FC, useState } from "react";
import styles from "./LoginForm.module.scss";
import {IUser} from "@/models/IUser";
import {Link} from "react-router-dom";
import {REGISTER_ROUTE} from "@/utils/constants/RouteNames";

const LoginForm: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitButton = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/users");

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const users = await response.json();
            console.log("Загруженные пользователи:", users);

            const user = users.find((u:IUser) => u.login === username && u.password === password);

            if (user) {
                alert("Вход выполнен!");
                localStorage.setItem("token", user.token);
                setError("");
            } else {
                setError("Неверный логин или пароль");
            }

        } catch (e) {
            console.error("Ошибка при авторизации:", e);
            setError("Ошибка сервера. Попробуйте позже.");
        }
    };

    return (
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
    );
};

export default LoginForm;