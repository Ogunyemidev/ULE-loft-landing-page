import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I apply?",
    answer: "You can apply by visiting our website and filling out the application form."
  },
  {
    question: "What is included in the rent?",
    answer: "Rent includes utilities, internet, and access to all building amenities."
  },
  {
    question: "Are pets allowed?",
    answer: "Yes, pets are allowed with a small additional deposit."
  },
  {
    question: "How do I pay and manage my lease?",
    answer: "You can manage everything through our online portal."
  },
  {
    question: "Can I make changes to my booking?",
    answer: "Changes can be made up to 30 days before your move-in date."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-700 py-4">
          <button
            className="w-full flex justify-between items-center text-left font-semibold text-lg"
            onClick={() => toggle(index)}
          >
            {faq.question}
            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {openIndex === index && (
            <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
