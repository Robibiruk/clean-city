import { useState } from "react";

function ReportForm({ pos, onSubmit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !desc || !image) {
      setError("Missing fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await onSubmit({ title, desc, image, pos });
      setDone(true);
      setTitle("");
      setDesc("");
      setImage(null);
    } catch (err) {
      setError("Failed to submit");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
      <input
        className="p-2 border rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="p-2 border rounded"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        className="p-2 border rounded"
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      {loading && <p className="text-blue-600">Submitting…</p>}
      {done && <p className="text-green-600">Submitted successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}

      <button
        disabled={loading}
        type="submit"
        className="bg-green-600 text-white py-2 rounded"
      >
        Report
      </button>
    </form>
  );
}

export default ReportForm;