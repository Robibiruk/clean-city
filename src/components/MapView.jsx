import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import ReportForm from "../components/ReportForm";

function LocationSelector({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });

  return null;
}

export default function MapView() {
  const center = [9.0108, 38.7613]; // Addis Ababa
  const [selectedPos, setSelectedPos] = useState(null);
  const [showForm, setShowForm] = useState(false);

const API = "https://YOUR_RENDER_URL.onrender.com";

const handleReportSubmit = async (data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("desc", data.desc);
  formData.append("lat", data.pos.lat);
  formData.append("lng", data.pos.lng);
  formData.append("image", data.image);

  try {
    const res = await fetch(`${API}/api/reports`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Server error");

    const result = await res.json();
    console.log("Saved:", result);

    setShowForm(false);
    setSelectedPos(null);
  } catch (err) {
    console.error("Submit error:", err);
    throw err;
  }
};

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">CleanCity – Report an Issue</h2>
      <p className="mb-4 text-gray-700">
        Click anywhere on the map to report trash, pollution, hazards, or anything that affects the environment.
      </p>

      {/* Map container */}
      <div className="rounded-lg overflow-hidden shadow-lg mb-6 h-[500px]">
        <MapContainer center={center} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <LocationSelector
            onSelect={(pos) => {
              setSelectedPos(pos);
              setShowForm(true);
            }}
          />

          {selectedPos && (
            <Marker position={selectedPos}>
              <Popup>Selected location for report</Popup>
            </Marker>
          )}

          <Marker position={center}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Report Form */}
      {showForm && selectedPos && (
        <div className="bg-white shadow-md p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">
            Report this location
          </h3>

          <ReportForm
            pos={selectedPos}
            onSubmit={handleReportSubmit}
          />
        </div>
      )}
    </div>
  );
}