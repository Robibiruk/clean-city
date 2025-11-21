export default function Header() {
return (
        <header className="bg-green-700 text-white py-4 shadow-xl sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                <div className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                    <h1 className="text-3xl font-extrabold tracking-tight">CleanCity</h1>
                </div>
                <nav className="space-x-6 text-lg font-medium hidden sm:block">
                    <a className="hover:text-green-200 transition duration-150" href="/">Home</a>
                    <a className="hover:text-green-200 transition duration-150" href="/map">Map</a>
                    <a className="hover:text-green-200 transition duration-150" href="/reports">Reports</a>
                </nav>
            </div>
        </header>
    );
};
