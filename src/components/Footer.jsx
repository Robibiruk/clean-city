export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} CleanCity. Making cities cleaner.
      </div>
    </footer>
  );
}