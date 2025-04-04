import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };
    return (_jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`, children: [_jsxs("div", { className: "container mx-auto px-4 flex justify-between items-center", children: [_jsx("a", { href: "#", className: "flex items-center", children: _jsxs("span", { className: "text-xl md:text-2xl font-bold font-manrope text-studio-blue", children: ["betamind", _jsx("span", { className: "text-studio-coral", children: "." })] }) }), _jsxs("nav", { className: "hidden md:flex space-x-8 items-center", children: [_jsx("button", { onClick: () => scrollToSection('approach'), className: "text-studio-dark-gray hover:text-studio-coral transition-colors font-medium", children: "Our Approach" }), _jsx("button", { onClick: () => scrollToSection('portfolio'), className: "text-studio-dark-gray hover:text-studio-coral transition-colors font-medium", children: "Portfolio" }), _jsx(Button, { onClick: () => scrollToSection('contact'), className: "bg-studio-blue hover:bg-studio-blue/90 text-white", children: "Contact Us" })] }), _jsx("button", { className: "md:hidden text-studio-dark-gray", onClick: () => setMobileMenuOpen(!mobileMenuOpen), children: mobileMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), mobileMenuOpen && (_jsx("div", { className: "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm", children: _jsxs("div", { className: "container mx-auto px-4 py-4 flex flex-col space-y-4", children: [_jsx("button", { onClick: () => scrollToSection('approach'), className: "text-studio-dark-gray py-2 hover:text-studio-coral transition-colors font-medium", children: "Our Approach" }), _jsx("button", { onClick: () => scrollToSection('portfolio'), className: "text-studio-dark-gray py-2 hover:text-studio-coral transition-colors font-medium", children: "Portfolio" }), _jsx(Button, { onClick: () => scrollToSection('contact'), className: "bg-studio-blue hover:bg-studio-blue/90 text-white w-full", children: "Contact Us" })] }) }))] }));
};
export default Header;
