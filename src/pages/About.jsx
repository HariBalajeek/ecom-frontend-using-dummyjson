import React from 'react';

const About = () => {
    return (
        <div className="p-6 w-full min-h-screen bg-gray-100 flex flex-col items-center gap-5">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="max-w-3xl text-center text-lg text-gray-700">
                Welcome to <span className="font-semibold">MyShoppy</span>, your go-to destination for high-quality products at affordable prices. 
                We are committed to delivering an exceptional shopping experience with a vast selection of products, reliable customer support, and secure transactions.
            </p>
            <div className="mt-10 p-5 w-full h-fit max-w-4xl text-center border border-gray-200 shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Top-quality products from trusted brands</li>
                    <li>Fast and reliable delivery</li>
                    <li>Secure payment options</li>
                    <li>24/7 customer support</li>
                </ul>
            </div>
        </div>
    );
};

export default About;