export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="max-w-6xl mx-auto px-6 text-center text-sm">
                <div className="mb-1">
                    <span className="font-semibold text-white">CleanCity</span> - A step towards a greener tomorrow.
                </div>
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};