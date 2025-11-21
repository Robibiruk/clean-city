import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ReportsPage() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Original fetch logic preserved
        fetch("http://localhost:5000/api/reports")
            .then(res => res.json())
            .then(data => setReports(data))
            .catch(err => console.error(err));
    }, []);

    // Placeholder image URL since the backend server might not be running for image assets
    const placeholderImageUrl = (title) => `https://placehold.co/400x200/22C55E/FFFFFF?text=${encodeURIComponent(title.split(' ')[0])}`;

    return (
        <div className="p-6 sm:p-10 max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-inner my-8">
            <h1 className="text-3xl font-extrabold text-gray-800 border-b-4 border-gray-400 pb-2 mb-8 flex items-center">
                <svg className="w-7 h-7 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                All Community Reports
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reports.length === 0 ? (
                    <div className="md:col-span-2 lg:col-span-3 text-center p-12 bg-white rounded-xl shadow-lg text-gray-500 font-medium">
                        Loading reports or server data is unavailable.
                    </div>
                ) : (
                    reports.map((report) => (
                        <div
                            key={report._id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:translate-y-[-2px] overflow-hidden border border-gray-100"
                        >
                            <img
                                // Using a placeholder for robustness, falling back to original structure
                                src={report.imageUrl ? `http://localhost:5000/${report.imageUrl}` : placeholderImageUrl(report.title)}
                                onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(report.title); }}
                                alt={report.title}
                                className="w-full h-48 object-cover object-center rounded-t-xl"
                            />
                            <div className="p-5">
                                <h2 className="font-bold text-xl text-gray-900 mb-2">{report.title}</h2>
                                <p className="text-gray-700 mb-3 line-clamp-3">{report.desc}</p>
                                <div className="text-sm text-green-600 font-mono bg-green-50 p-2 rounded-lg inline-block">
                                    {/* Mock location details since original reports might not have it if fetch fails */}
                                    Lat: {report.lat?.toFixed(4) || '9.0108'}, Lng: {report.lng?.toFixed(4) || '38.7613'}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
