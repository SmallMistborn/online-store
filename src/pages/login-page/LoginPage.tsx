import React from 'react';
import LoginForm from "@/components/login-form/LoginForm";
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className="login-page">
            Login Page
            <LoginForm />
        </div>
    );
};

export default LoginPage;