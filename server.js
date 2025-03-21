const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // Порт, на котором будет работать сервер

// Middleware для обработки CORS
app.use(cors());

// Middleware для парсинга JSON
app.use(express.json());

// Данные, которые будет возвращать сервер
const data = {
    users: [
        {
            login: "admin",
            password: "admin123",
            token: "",
            isAdmin: true,
            id: "c2aa",
        },
        {
            login: "asdf",
            password: "12345q",
            token: "",
            isAdmin: false,
            id: "44b9",
        },
        {
            login: "misha",
            password: "zxc",
            token: "",
            isAdmin: false,
            id: "2a43",
        },
        {
            login: "123",
            password: "11223q",
            token: "",
            isAdmin: false,
            id: "50b1",
        },
        {
            id: "778d",
            login: "vasya",
            password: "behonest",
            token: "",
            isAdmin: false,
        },
        {
            id: "9392",
            login: "ivan",
            password: "guy",
            token: "",
            isAdmin: false,
        },
        {
            id: "7bc7",
            login: "kitty",
            password: "890",
            token: "",
            isAdmin: false,
        },
        {
            id: "f034",
            login: "www",
            password: "vk",
            token: "",
            isAdmin: false,
        },
        {
            id: "7f38",
            login: "er",
            password: "2",
            token: "",
            isAdmin: false,
        },
        {
            id: "1741",
            login: "awd",
            password: "awd",
            token: "",
            isAdmin: false,
        },
        {
            id: "52c8",
            login: "ss",
            password: "ss",
            token: "",
            isAdmin: false,
        },
        {
            id: "",
            login: "admin123",
            password: "123123",
            token: "",
            isAdmin: false,
        },
    ],
    furniture: [
        {
            id: "1",
            name: "barselona",
            image: "/images/furniture/barselona.png",
            price: "673",
            amount: "7",
        },
        {
            id: "2",
            name: "barse",
            image: "/images/furniture/barselona.png",
            price: "600",
            amount: "21",
        },
        {
            id: "3",
            name: "lona",
            image: "/images/furniture/barselona.png",
            price: "6873",
            amount: "3",
        },
    ],
};

// Роут для возврата данных
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});