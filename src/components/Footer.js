import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heart } from 'lucide-react';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsx("footer", { className: "py-8 bg-studio-dark-gray text-white text-center", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("p", { className: "flex items-center justify-center", children: ["Made with ", _jsx(Heart, { className: "h-4 w-4 mx-2 text-studio-coral fill-studio-coral" }), " by ", _jsx("span", { className: "font-manrope font-bold ml-2", children: "betamind studio" })] }), _jsxs("p", { className: "text-sm mt-2 text-gray-400", children: ["\u00A9 ", currentYear, " betamind studio. All rights reserved."] })] }) }));
};
export default Footer;
