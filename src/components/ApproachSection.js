import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search, Lightbulb, LineChart } from 'lucide-react';
const ApproachSection = () => {
    const approaches = [
        {
            icon: _jsx(Search, { className: "h-12 w-12 text-studio-blue" }),
            title: "Research with Empathy",
            description: "We listen first. Every problem starts with people."
        },
        {
            icon: _jsx(Lightbulb, { className: "h-12 w-12 text-studio-yellow" }),
            title: "Simplify, Don't Complicate",
            description: "We cut through noise to design solutions that feel obvious."
        },
        {
            icon: _jsx(LineChart, { className: "h-12 w-12 text-studio-green" }),
            title: "Measure Impact",
            description: "Success isn't just launch day—it's lasting change."
        }
    ];
    return (_jsx("section", { id: "approach", className: "section-spacing bg-studio-light-gray", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-studio-blue mb-4 font-manrope", children: "Less is more, but better." }), _jsx("div", { className: "w-20 h-1 bg-studio-coral mx-auto rounded-full" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: approaches.map((approach, index) => (_jsx("div", { className: "bg-white p-8 rounded-lg shadow-sm hover-card-effect backdrop-blur-sm bg-white/80 border border-gray-100", children: _jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsx("div", { className: "mb-6", children: approach.icon }), _jsx("h3", { className: "text-xl font-semibold mb-4 text-studio-dark-gray font-manrope", children: approach.title }), _jsx("p", { className: "text-gray-600", children: approach.description })] }) }, index))) })] }) }));
};
export default ApproachSection;
