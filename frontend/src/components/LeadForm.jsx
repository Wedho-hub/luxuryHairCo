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
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-white/8 bg-[#070206] p-8 shadow-2xl shadow-black/60"
    >
      <div>
        <label
          className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.28em] text-[#5c4e43]"
          htmlFor="lead-name"
        >
          Your Name
        </label>
        <input
          id="lead-name"
          value={form.name}
          placeholder="Sarah Smith"
          required
          className="w-full rounded-2xl border border-white/8 bg-white/4 px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#d4af37]/40 focus:ring-2 focus:ring-[#d4af37]/8"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <label
          className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.28em] text-[#5c4e43]"
          htmlFor="lead-phone"
        >
          WhatsApp Number
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={form.phone}
          placeholder="+27 82 555 1234"
          required
          className="w-full rounded-2xl border border-white/8 bg-white/4 px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#d4af37]/40 focus:ring-2 focus:ring-[#d4af37]/8"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a82e59] via-[#c73b6c] to-[#d94d7a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#c73b6c]/25 transition hover:brightness-110 active:scale-95 select-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending...
          </>
        ) : (
          "Claim R50 OFF on WhatsApp"
        )}
      </button>

      <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#2e2520]">
        WhatsApp only · No spam, ever.
      </p>

      {isError && (
        <p className="rounded-2xl border border-red-900/30 bg-red-950/40 px-4 py-3 text-center text-sm text-red-400">
          {errorMsg}
        </p>
      )}

      {status === "success" && (
        <p className="rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/8 px-4 py-3 text-center text-sm font-medium text-[#d4af37]">
          Opening WhatsApp — your discount is waiting.
        </p>
      )}
    </form>
  );
};

export default LeadForm;
