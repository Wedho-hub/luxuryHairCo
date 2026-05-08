import { useState } from "react";
import API from "../services/api";

const WHATSAPP_NUMBER = "27825551234";

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("error:Please enter both your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      await API.post("/leads", form);
    } catch {
      // Backend not configured — proceed with WhatsApp fallback
    }

    const waMessage = encodeURIComponent(
      `Hi! I'd like to claim my R50 discount.\n\nName: ${form.name}\nPhone: ${form.phone}`
    );

    setForm({ name: "", phone: "" });
    setIsSubmitting(false);
    setStatus("success");

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank");
    }, 400);
  };

  const isError = status.startsWith("error:");
  const errorMsg = isError ? status.slice(6) : "";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-xl shadow-black/5">
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="lead-name">
          Your Name
        </label>
        <input
          id="lead-name"
          value={form.name}
          placeholder="Sarah Smith"
          required
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="lead-phone">
          WhatsApp Number
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={form.phone}
          placeholder="+27 82 555 1234"
          required
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/5"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d786] to-[#f8e3b2] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
            Sending...
          </>
        ) : (
          "Claim R50 OFF on WhatsApp"
        )}
      </button>

      <p className="text-xs text-center text-gray-400">
        We'll reach out on WhatsApp only. No spam, ever.
      </p>

      {isError && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-center text-sm text-red-600">{errorMsg}</p>
      )}

      {status === "success" && (
        <p className="rounded-2xl bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700">
          Opening WhatsApp — we'll have your discount ready!
        </p>
      )}
    </form>
  );
};

export default LeadForm;
