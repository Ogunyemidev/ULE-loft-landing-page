import React from "react";

const testimonials = [
  {
    name: "Tunde O",
    emoji: "👍",
    text: "Loft was a breath of fresh air. The apartment was neat, well-furnished, and in a secure area. I stayed for a work trip in Lekki and didn’t want to leave. Great value for money!",
    color: "text-purple-400",
    quoteColor: "text-purple-400"
  },
  {
    name: "Chinelo A",
    emoji: "🟥",
    text: "From check-in to check-out, everything was smooth. The place was so cozy and had this modern vibe. I even hosted a small hangout with friends. Will definitely book again.",
    color: "text-gray-300",
    quoteColor: "text-gray-300"
  },
  {
    name: "Idris B.",
    emoji: "🎩",
    text: "I needed a quiet place to relax and Loft delivered. The location was central, the Wi-Fi was strong, and the host was super responsive. 10/10 experience.",
    color: "text-yellow-400",
    quoteColor: "text-yellow-400"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <button className="bg-purple-700 text-white font-semibold px-5 py-2 rounded-full text-sm mb-4">
          ★ Ratings & Reviews
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">
          Real Stories. Real People. Real Loft.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-3xl p-6 w-full max-w-sm transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gray-800 text-3xl rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <span>{item.emoji}</span>
              </div>
              <h4 className="text-lg font-semibold">{item.name}</h4>
            </div>
            <p className={`text-sm font-medium ${item.color} mb-4`}>
              {item.text}
            </p>
            <div className={`text-2xl font-bold ${item.quoteColor}`}>&rdquo;</div>
          </div>
        ))}
      </div>
    </div>
  );
}
