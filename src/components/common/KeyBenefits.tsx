// components/common/KeyBenefits.tsx
import React from "react";

interface Benefit {
  title: string;
  description: string;
}

interface KeyBenefitsProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  benefits: Benefit[];
  backgroundColor?: string;
}

export const KeyBenefits = ({
  eyebrow,
  title,
  subtitle,
  benefits,
  backgroundColor = "white",
}: KeyBenefitsProps) => {
  return (
    <section className={`py-16 ${backgroundColor === "gray" ? "bg-gray-100" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm font-semibold text-green-600 uppercase">{eyebrow}</p>
        <h2 className="text-3xl font-bold mt-2">{title}</h2>
        {subtitle && <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>}

        <ul className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-white p-6 shadow rounded-xl">
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
