"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const blocks = [
      {
        type: "text",
        name: "name",
        value: formData.get("name") || "",
      },
      {
        type: "text",
        name: "message",
        value: formData.get("message") || "",
      },
    ];

    const res = await fetch("https://forminit.com/f/v89c1yia7wb", {
      method: "POST",
      body: JSON.stringify({ blocks }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
    setSubmitting(false);
  }

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
      <div className="text-center max-w-xl space-y-2">
        <p>Hi, I would like to move the conversation away from Upwork if you dont mind. You can contact me through any of the following</p>
        <p>Also if you don&apos;t mind, I will prefer to receive any remaining payment off-upwork or as crypto</p>
      </div>

      <div className="w-full max-w-md">
        {submitted ? (
          <div className="text-center p-6 border border-green-500 rounded-lg">
            <p className="text-green-600 font-semibold">Thanks! Your message has been sent.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold text-center">Leave a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your name (optional)"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your message or any details you'd like to share"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      <div className="text-center space-y-1">
        <p>Name: Dipe Kehinde</p>
        <p>Email: dipekehinde@gmail.com</p>
        <p>WhatsApp: +2348167774084</p>
        <p>Telegram: <a href="https://t.me/Hex_Nicklas" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">@Hex_Nicklas</a></p>
      </div>
    </div>
  );
}
