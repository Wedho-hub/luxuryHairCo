import { useState } from "react";
import API from "../services/api";

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      setStatus("Please enter both name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      await API.post("/leads", form);
      setStatus("Thanks! We will contact you via WhatsApp shortly.");
      setForm({ name: "", phone: "" });
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-xl shadow-black/5">
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          value={form.name}
          placeholder="Name"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          value={form.phone}
          placeholder="Phone"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Get R50 OFF"}
      </button>

      <p className="text-sm text-gray-500">
        We never share your details. WhatsApp confirmation only.
      </p>

      {status && <p className="text-sm text-center text-black">{status}</p>}
    </form>
  );
};

export default LeadForm;
