import Header from "./components/Header";
import Footer from "./components/Footer";
import MapView from "./components/MapView";
import ReportsPage from "./components/ReportsPage";
import "leaflet/dist/leaflet.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <MapView />
      </main>
      <div className="flex-grow" >
        <ReportsPage />
        </div>
      <Footer />
    </div>
  );
}