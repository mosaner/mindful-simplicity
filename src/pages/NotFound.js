import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
    const location = useLocation();
    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }), _jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Oops! Page not found" }), _jsx("a", { href: "/", className: "text-blue-500 hover:text-blue-700 underline", children: "Return to Home" })] }) }));
};
export default NotFound;
