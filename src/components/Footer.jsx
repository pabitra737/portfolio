import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-bg-light dark:bg-bg-dark py-8 text-center text-text-muted dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="flex items-center gap-2">
                    Made with <FaHeart className="text-red-500 animate-pulse" /> by Pabitra
                </p>
                <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
