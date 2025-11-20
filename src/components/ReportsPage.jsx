import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reports")
      .then(res => res.json())
      .then(data => setReports(data))
      .catch(err => console.error(err));
  }, []);

  const center = reports.length
    ? [reports[0].lat, reports[0].lng]
    : [9.0108, 38.7613]; // fallback center

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {reports.map((report) => (
          <div
            key={report._id}
            className="border rounded-lg shadow p-4 flex flex-col"
          >
            <img
              src={`http://localhost:5000/${report.imageUrl}`}
              alt={report.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="font-semibold text-lg">{report.title}</h2>
            <p className="text-gray-700 mb-1">{report.desc}</p>
            <p className="text-gray-500 text-sm">
              Location: {report.lat.toFixed(4)}, {report.lng.toFixed(4)}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}