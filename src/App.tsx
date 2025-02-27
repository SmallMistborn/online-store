import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@/router/routes";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


interface User {
    id: number;
    name: string;
    email: string;
}

const App = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     fetch("/api/users")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error("Ошибка загрузки данных");
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setUsers(data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setLoading(false);
    //         });
    // }, []);

    return (

            <BrowserRouter>
                <Header />

                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
                <Footer />
            </BrowserRouter>

    );
};

export default App;