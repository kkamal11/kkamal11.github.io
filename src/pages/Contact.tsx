import { EnvelopeSimple, LinkedinLogo, GithubLogo } from "phosphor-react";
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
      if (result.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white flex items-center justify-center px-6 py-16"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 border border-[#e8e6df] rounded-md overflow-hidden">

        {/* ── Left panel ── */}
        <div className="bg-[#f5f3ee] p-10 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-6">

            {/* Header */}
            <div>
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center gap-2 mb-4"
              >
                <span className="w-4 h-px bg-gray-400 inline-block" />
                Get in touch
              </span>
              <h1
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
                className="text-4xl font-light text-gray-900 leading-tight"
              >
                Let's Build<br />
                Something <em className="text-[#c8440a]">Together</em>.
              </h1>
              <p className="text-[13px] text-gray-500 leading-relaxed mt-4">
                Have a project in mind, a question, or just want to say hello?
                I am always open to interesting conversations.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:dev.kamal.kishor@gmail.com"
                className="group flex items-center gap-3 text-[13px] text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white border border-[#e8e6df] flex items-center justify-center shrink-0
                  group-hover:border-gray-400 transition-colors">
                  <EnvelopeSimple size={14} />
                </span>
                dev.kamal.kishor@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/kkamal11"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-[13px] text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white border border-[#e8e6df] flex items-center justify-center shrink-0
                  group-hover:border-gray-400 transition-colors">
                  <LinkedinLogo size={14} />
                </span>
                linkedin.com/in/kkamal11
              </a>
              <a
                href="https://github.com/kkamal11"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-[13px] text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white border border-[#e8e6df] flex items-center justify-center shrink-0
                  group-hover:border-gray-400 transition-colors">
                  <GithubLogo size={14} />
                </span>
                github.com/kkamal11
              </a>
            </div>
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-widest uppercase text-gray-400"
            >
              Available for opportunities
            </span>
          </div>
        </div>

        {/* ── Right panel — form ── */}
        <div className="bg-white p-10">
          {status === "success" ? (
            <SuccessState />
          ) : (
            <form
              action="https://formspree.io/f/mreegqaa"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 h-full"
            >
              <input type="text" name="_gotcha" className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingInput label="Your Name"  name="name"  type="text"  />
                <FloatingInput label="Your Email" name="email" type="email" />
              </div>

              <PhoneInput />
              <FloatingTextarea label="Your Message" name="message" />

              {status === "error" && (
                <p
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-[11px] tracking-wide text-red-500"
                >
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-auto  
                  border border-gray-900 text-gray-900 py-3 rounded-[3px]
                  hover:bg-gray-900 hover:text-white
                  transition-colors duration-200 cursor-pointer disabled:opacity-40"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

/* ── Floating Input ── */
function FloatingInput({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={name !== "phone"}
        placeholder=" "
        className="peer w-full border border-[#e8e6df] rounded-[4px] px-4 pt-6 pb-2 text-[13px]
          focus:outline-none focus:border-gray-900 transition-colors bg-[#fafaf8]"
      />
      <label
        className="absolute left-4 top-2 text-[10px]  text-gray-400
          transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px]
          peer-placeholder-shown:tracking-normal peer-placeholder-shown:uppercase-none
          peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-gray-700"
        // style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name }: { label: string; name: string }) {
  return (
    <div className="relative flex-1">
      <textarea
        name={name}
        rows={5}
        required
        placeholder=" "
        className="peer w-full h-full border border-[#e8e6df] rounded-[4px] px-4 pt-6 pb-2 text-[13px]
          resize-none focus:outline-none focus:border-gray-900 transition-colors bg-[#fafaf8]"
      />
      <label
        className="absolute left-4 top-2 text-[10px] text-gray-400
          transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px]
          peer-placeholder-shown:tracking-normal
          peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-gray-700"
      >
        {label}
      </label>
    </div>
  );
}

/* ── Phone Input ── */
function PhoneInput() {
  const [code, setCode] = useState("+91");

  return (
    <div className="flex gap-3">
      <div className="relative w-28 shrink-0">
        <select
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border border-[#e8e6df] rounded-[4px] px-3 pt-6 pb-2 text-[13px]
            bg-[#fafaf8] focus:outline-none focus:border-gray-900 transition-colors appearance-none"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+81">🇯🇵 +81</option>
        </select>
        <label
          className="absolute left-3 top-2 text-[10px] text-gray-400"
        >
          Code
        </label>
      </div>

      <div className="relative flex-1">
        <input
          type="tel"
          placeholder=" "
          className="peer w-full border border-[#e8e6df] rounded-[4px] px-4 pt-6 pb-2 text-[13px]
            focus:outline-none focus:border-gray-900 transition-colors bg-[#fafaf8]"
          onChange={(e) => {
            const hidden = document.getElementById("phone_full") as HTMLInputElement;
            if (hidden) hidden.value = `${code} ${e.target.value}`;
          }}
        />
        <label
          className="absolute left-4 top-2 text-[10px] text-gray-400
            transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px]
            peer-placeholder-shown:tracking-normal
            peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-gray-700"
        >
          Phone Number
        </label>
      </div>
      <input type="hidden" name="phone" id="phone_full" />
    </div>
  );
}

/* ── Success State ── */
function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 gap-5">
      {/* Animated check */}
      <div className="w-16 h-16 rounded-full border border-[#e8e6df] bg-[#f5f3ee] flex items-center justify-center">
        <svg
          width="28" height="28" viewBox="0 0 24 24"
          fill="none" stroke="#c8440a" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="text-center">
        <h3
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.01em" }}
          className="text-xl font-light text-gray-900"
        >
          Message Sent!
        </h3>
        <p className="text-[13px] text-gray-500 mt-2">
          Thanks for reaching out — I'll get back to you shortly.
        </p>
      </div>
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[10px] tracking-widest uppercase text-[#c8440a]"
      >
        ✓ Delivered
      </span>
    </div>
  );
}