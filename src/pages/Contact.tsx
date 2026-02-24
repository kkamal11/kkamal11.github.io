import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const result = await res.json();
      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-6 my-3 md:my-8">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-sm border border-gray-200 p-10 space-y-6">

        <div>
          <h1 className="text-3xl font-[400px] tracking-tight text-gray-800 whitespace-nowrap mb-1">Contact Me</h1>
          <p className="text-gray-500 text-sm">
            Let's build something meaningful together.
          </p>
        </div>

        {status === "success" ? (
          <SuccessState />
        ) : (
          <form
            action="https://formspree.io/f/mreegqaa"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="text" name="_gotcha" className="hidden" />

            <FloatingInput label="Your Name" name="name" type="text" />
            <FloatingInput label="Your Email" name="email" type="email" />
            <PhoneInput />
            <FloatingTextarea label="Your Message" name="message" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-white text-gray-800 py-3 border border-gray-300 text-gray-700 hover:bg-black hover:text-white rounded-lg text-sm transition cursor-pointer disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------- Floating Inputs ---------- */

type InputProps = {
  label: string;
  name: string;
  type: string;
};

function FloatingInput({ label, name, type }: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={name !== "phone"}
        placeholder=" "
        className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700"
      />
      <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-700">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name }: { label: string; name: string }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={5}
        required
        placeholder=" "
        className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-gray-700"
      />
      <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-700">
        {label}
      </label>
    </div>
  );
}

/* ---------- Phone Input ---------- */

function PhoneInput() {
  const [code, setCode] = useState("+91");

  return (
    <div className="flex gap-2">
      <div className="relative w-28">
        <select
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-gray-700"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+81">🇯🇵 +81</option>
        </select>
        <label className="absolute left-3 top-1 text-xs text-gray-400">
          Code
        </label>
      </div>

      <div className="relative flex-1">
        <input
          type="tel"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700"
          onChange={(e) => {
            const hidden = document.getElementById("phone_full") as HTMLInputElement;
            hidden.value = `${code} ${e.target.value}`;
          }}
        />
        <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
          peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-700">
          Phone Number
        </label>
      </div>

      <input type="hidden" name="phone" id="phone_full" />
    </div>
  );
}

/* ---------- Success State ---------- */

function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4 animate-fade-in">
      <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-green-500 animate-check"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-800">Message Sent!</h3>
      <p className="text-sm text-gray-500 text-center">
        Thanks for reaching out. I'll get back to you shortly.
      </p>
    </div>
  );
}
