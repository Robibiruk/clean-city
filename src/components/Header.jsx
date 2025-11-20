export default function Header() {
  return (
    <header className="bg-green-700 text-white py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">CleanCity</h1>
        <nav className="space-x-4">
          <a className="hover:underline" href="/">Home</a>
          <a className="hover:underline" href="/map">Map</a>
          <a className="hover:underline" href="/reports">Reports</a>
        </nav>
      </div>
    </header>
  );
}