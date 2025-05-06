import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Content } from "./Content";
import { Cart } from "./Cart";
import { Route, Routes } from "react-router";
import { Likes } from "./Likes";

const headphones = [
    {
        id: 1,
        img: "./assets/img/1.png",
        title: "Apple BYZ S852I",
        new_price: 2927,
        old_price: 3527,
        rate: 4.7,
        wire: true,
    },
    {
        id: 2,
        img: "./assets/img/2.png",
        title: "Apple EarPods",
        new_price: 2327,
        old_price: null,
        rate: 4.5,
        wire: true,
    },
    {
        id: 3,
        img: "./assets/img/3.png",
        title: "Apple EarPods",
        new_price: 2327,
        old_price: null,
        rate: 4.5,
        wire: true,
    },
    {
        id: 4,
        img: "./assets/img/4.png",
        title: "Apple AirPods",
        new_price: 9527,
        old_price: null,
        rate: 4.7,
        wire: false,
    },
    {
        id: 5,
        img: "./assets/img/5.png",
        title: "GERLAX GH-04",
        new_price: 6527,
        old_price: null,
        rate: 4.7,
        wire: false,
    },
    {
        id: 6,
        img: "./assets/img/6.png",
        title: "BOROFONE BO4",
        new_price: 7527,
        old_price: null,
        rate: 4.7,
        wire: false,
    },
];

const getSSorDefault = (key, defaultValue) => {
    let value = sessionStorage.getItem(key);
    if (!value) {
        return defaultValue;
    }

    return JSON.parse(value);
};

function App() {
    const [likes, setLikes] = useState(getSSorDefault("likes", [])); // Массив с избранными товарами
    const [cart, setCart] = useState(getSSorDefault("cart", [])); // Массив с товарами в корзине

    useEffect(() => {
        sessionStorage.cart = JSON.stringify(cart);
    }, [cart]);

    const toCart = (item) => {
        const itemIndex = cart.findIndex((val) => val.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                count: 1,
            };
            setCart([...cart, newItem]);
        } else {
            const newItem = {
                ...cart[itemIndex],
                count: cart[itemIndex].count + 1,
            };
            const newCart = cart.slice();
            newCart.splice(itemIndex, 1, newItem);
            setCart(newCart);
        }
        sessionStorage.cart = JSON.stringify(cart);
    };

    const toLikes = (item) => {
        const itemIndex = likes.findIndex((val) => val.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                count: 1,
            };
            setLikes([...likes, newItem]);
        } else {
            return;
        }
    };

    const changeCount = (item, add) => {
        const itemIndex = cart.findIndex((val) => val.id === item.id);

        const newItem = {
            ...cart[itemIndex],
            count: add ? cart[itemIndex].count + 1 : cart[itemIndex].count === 0 ? cart[itemIndex].count : cart[itemIndex].count - 1,
        };

        const newCart = cart.slice();
        newCart.splice(itemIndex, 1, newItem);
        setCart(newCart);

        sessionStorage.cart = JSON.stringify(cart);
    };

    const deletItem = (item) => {
        const itemIndex = cart.findIndex((val) => val.id === item.id);

        const newCart = cart.slice();
        newCart.splice(itemIndex, 1);
        setCart(newCart);

        sessionStorage.cart = JSON.stringify(cart);
    };

    return (
        <>
            <Header likes={likes.reduce((acc, item) => acc + item.count, 0)} cart={cart.reduce((acc, item) => acc + item.count, 0)} />
            <Routes>
                <Route path="/" element={<Content headphones={headphones} toCart={toCart} toLikes={toLikes} />} />
                <Route path="/cart" element={<Cart cart={cart} change={changeCount} delete={deletItem} sum={cart.reduce((acc, item) => acc + item.count * item.new_price, 0)} />} />
                <Route path="/likes" element={<Likes />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
