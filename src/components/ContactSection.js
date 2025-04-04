import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail } from 'lucide-react';
const ContactSection = () => {
    return (_jsx("section", { id: "contact", className: "section-spacing bg-gradient-to-br from-studio-blue to-studio-blue/90 text-white", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 font-manrope", children: "Simple problems. Big solutions. Let's chat." }), _jsx("div", { className: "w-20 h-1 bg-studio-coral mx-auto rounded-full" })] }), _jsx("div", { className: "max-w-2xl mx-auto", children: _jsx("div", { className: "flex justify-center", children: _jsxs("a", { href: "mailto:hello@betamind.space", className: "flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5 w-full max-w-md", children: [_jsx(Mail, { className: "h-6 w-6 mr-4" }), _jsx("span", { children: "hello@betamind.space" })] }) }) })] }) }));
};
export default ContactSection;
