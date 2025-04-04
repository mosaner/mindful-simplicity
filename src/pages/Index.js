import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ApproachSection from '@/components/ApproachSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
const Index = () => {
    useEffect(() => {
        document.title = "betamind - Digital Innovation Studio";
    }, []);
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Header, {}), _jsx(HeroSection, {}), _jsx(ApproachSection, {}), _jsx(PortfolioSection, {}), _jsx(ContactSection, {}), _jsx(Footer, {})] }));
};
export default Index;
