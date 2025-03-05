import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@/router/routes";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


const App = () => {

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