import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CardWidget';

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/category/samsung',
        name: 'samsung',
    },
    {
        id: 3,
        path: '/category/iphone',
        name: 'iphone',
    },
    {
        id: 4,
        path: '/category/motorola',
        name: 'motorola',
    },
];

const Navbar = () => {
    return (
        <nav>
            <h2>After</h2>
            <ul>
                {categories.map((category) => (
                    <Link to={category.path} key={category.id}>
                        {category.name}
                    </Link>
                ))}
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;