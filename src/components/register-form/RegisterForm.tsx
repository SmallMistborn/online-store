import React, {FC, useState} from 'react';
import styles from "@/components/login-form/LoginForm.module.scss";
import {IUser} from "@/models/IUser";

const RegisterForm:FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const submitButton = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {

            const response = await fetch("/api/users");
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);

            const users: IUser[] = await response.json();
            const userExists = users.some((u: IUser) => u.login === username);

            if (userExists) {
                setError("Пользователь с таким именем уже существует");
                return;
            }

            if (password !== confirmPassword) {
                setError("Пароли не совпадают");
                return;
            }

            const newUser = {
                login: username,
                password: password,
                token: "",
                isAdmin: false
            };

            const postResponse = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });

            if (!postResponse.ok) throw new Error(`Ошибка HTTP: ${postResponse.status}`);

            alert(`Регистрация успешна! Добро пожаловать, ${newUser.login}`);
            setUsername("");
            setPassword("");
            setConfirmPassword("");
        } catch (e) {
            console.error("Ошибка при регистрации:", e);
            setError("Ошибка сервера. Попробуйте позже.");
        }
    };

    return (
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
        </form>
    );
};

export default RegisterForm;